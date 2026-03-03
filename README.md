# mcp-pptx-preview

PPTX ファイルを SVG プレビューに変換する MCP サーバーです。

## 機能

- `preview_pptx` ツール: PPTX ファイルパスを受け取り、各スライドの SVG 文字列を返します

## 必要条件

- Node.js >= 20

## インストール

```bash
npm install
npm run build
```

## 使い方

### Claude Desktop

`claude_desktop_config.json` に以下を追加してください:

```json
{
  "mcpServers": {
    "pptx-preview": {
      "command": "node",
      "args": ["/path/to/mcp-pptx-preview/dist/index.js"]
    }
  }
}
```

## ツール

### preview_pptx

PPTX ファイルを SVG に変換します。

**パラメータ:**

| 名前       | 型       | 説明                    |
| ---------- | -------- | ----------------------- |
| `filePath` | `string` | PPTX ファイルの絶対パス |

**戻り値:** 各スライドの SVG 文字列の配列

## 開発

```bash
# ビルド
npm run build

# リント
npm run lint

# 型チェック
npm run typecheck

# サーバー起動
npm start

# MCP Inspector でデバッグ
npx @modelcontextprotocol/inspector node dist/index.js
```

## ライセンス

MIT
