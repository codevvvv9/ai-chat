# API 文档

本文档用于前后端协作，记录当前后端对外接口的统一约定，以及已经确认的用户系统 MVP API 设计。

## 统一接口说明

- 后端基于 `Express + TypeScript`
- 接口请求与响应统一使用 JSON
- 除注册和登录外，受保护接口统一使用 `Authorization: Bearer <token>`
- JWT 由登录接口签发，过期时间由环境变量 `JWT_EXPIRES_IN` 控制
- 退出登录不做服务端 token 失效，客户端删除本地 token 即可
- 所有时间字段统一使用 ISO 8601 字符串
- 密码字段只允许出现在请求体中，不会出现在响应体中

统一错误语义：

- `400`：请求参数不合法
- `401`：未认证、token 非法或 token 已过期
- `409`：资源冲突，例如用户名已存在
- `500`：服务端内部错误

## 当前保留接口

### 1. 健康检查

- 请求方法：`GET`
- 路径：`/health`
- 说明：用于确认服务是否存活

响应示例：

```json
{
  "status": "ok"
}
```

## 用户系统 MVP 设计

这一部分是已经确认的 API 设计，用于后续实现，不代表这些接口当前已经可用。

### 目标范围

- 只做 MVP
- 登录标识仅使用 `username`
- 只包含注册、登录、退出登录
- 使用单个 `JWT / Bearer Token`
- 不做角色权限
- 不做 refresh token
- 退出登录仅表示客户端删除本地 token，不做服务端 token 失效

### 用户领域模型

用户实体最小字段如下：

- `id`
- `username`
- `password_hash`
- `created_at`
- `updated_at`

约束说明：

- `username` 必须唯一
- 注册时密码必须先哈希，再写入 `password_hash`
- 任何接口都不返回密码或密码哈希

### 认证配置

后端实现时需要新增认证相关环境变量：

- `JWT_SECRET`：用于签发 JWT
- `JWT_EXPIRES_IN`：用于控制 JWT 过期时间，例如 `7d`、`24h`

## 用户系统接口设计

### 1. 用户注册

- 请求方法：`POST`
- 路径：`/auth/register`
- 说明：创建新用户，用户名唯一，密码哈希后入库

请求体示例：

```json
{
  "username": "alice",
  "password": "123456"
}
```

成功响应示例：

```json
{
  "id": 1,
  "username": "alice",
  "created_at": "2026-04-23T12:00:00.000Z"
}
```

错误语义：

- `400`：参数缺失或格式不合法
- `409`：用户名已存在

### 2. 用户登录

- 请求方法：`POST`
- 路径：`/auth/login`
- 说明：校验用户名和密码，成功后返回 Bearer Token

请求体示例：

```json
{
  "username": "alice",
  "password": "123456"
}
```

成功响应示例：

```json
{
  "access_token": "jwt-token",
  "token_type": "Bearer",
  "expires_in": "7d"
}
```

错误语义：

- `400`：参数缺失或格式不合法
- `401`：用户名不存在或密码错误

### 3. 退出登录

- 请求方法：`POST`
- 路径：`/auth/logout`
- 说明：服务端只提供退出动作语义，不做 token 失效；客户端收到成功响应后删除本地 token

请求头示例：

```text
Authorization: Bearer <token>
```

成功响应示例：

```json
{
  "success": true
}
```

错误语义：

- `401`：未携带 token 或 token 格式非法

### 4. 当前用户信息

- 请求方法：`GET`
- 路径：`/auth/me`
- 说明：前端在页面刷新后，使用本地 Bearer Token 获取当前登录用户信息

请求头示例：

```text
Authorization: Bearer <token>
```

成功响应示例：

```json
{
  "id": 1,
  "username": "alice",
  "created_at": "2026-04-23T12:00:00.000Z"
}
```

错误语义：

- `401`：未携带 token、token 非法或 token 已过期

## 当前状态

当前后端仍然只提供最小可运行骨架，用户系统接口还未实现。后续如果新增或实现业务接口，需要同步补充：

- 请求方法
- 路径
- 请求参数或请求体
- 响应结构
- 错误码和错误响应

## 约定

- 在当前阶段，不要假设存在未列出的接口
- 对于“当前保留接口”中的已实现部分，以后端 `src/routes/` 下的实际代码为准
- 对于“用户系统 MVP 设计”，以本文档当前定义为后续实现基线
- 若接口行为变更，应优先更新后端代码，再同步更新本文档
