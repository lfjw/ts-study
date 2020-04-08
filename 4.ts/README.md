
## tsconfig 

```sh
# 生成配置文件
tsc --init
```

```json
{
  removeComments: true, //去掉注释
}
```
- 注意：此时执行tsc demo.ts 并不会把注释去掉，只有执行tsc 不带任何参数的时候，tsconfig才会生效

