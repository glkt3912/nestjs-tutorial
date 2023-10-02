FROM node:18.6.0-slim
# 必要なパッケージのインストール
RUN apt-get update && \
apt-get install -y locales curl zsh git

# zprezto のインストール
RUN git clone --recursive https://github.com/sorin-ionescu/prezto.git "${ZDOTDIR:-$HOME}/.zprezto" && \
    zsh -c 'setopt EXTENDED_GLOB && \
    for rcfile in "${ZDOTDIR:-$HOME}"/.zprezto/runcoms/^README.md(.N); do \
    ln -s "$rcfile" "${ZDOTDIR:-$HOME}/.${rcfile:t}"; \
    done'

# zsh をデフォルトのシェルとして設定
CMD [ "zsh" ]

RUN locale-gen ja_JP.UTF-8
RUN localedef -f UTF-8 -i ja_JP ja_JP
ENV LANG=ja_JP.UTF-8
ENV TZ=Asia/Tokyo
WORKDIR /app
