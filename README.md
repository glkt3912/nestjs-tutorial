# nestjs用のテンプレート構築環境

## 手順

1. 仮想開発環境の準備
  * Mac の場合はDocker環境を準備
  * Windowsの場合はwsl 環境を用意し、ubuntu20.0.4ディストリビューションでnvmによる管理
    - wslでのNodejsパッケージ管理について参考：https://www.zenryoku-kun.com/post/nvm
2. `.env` ファイルを作成し環境変数を設定
3. vscodeのRemote SSL拡張機能を入れる


## .env 

```
POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres
POSTGRES_DB=postgres
PGADMIN_DEFAULT_EMAIL=nestjs@example.com
PGADMIN_DEFAULT_PASSWORD=password
```