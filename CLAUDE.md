# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクト概要

PPTX ファイルを SVG プレビューに変換する MCP (Model Context Protocol) サーバー。stdio トランスポートで通信し、`preview_pptx` ツールを提供する。

## コマンド

- `npm run build` — TypeScript コンパイル (`tsc`)
- `npm start` — サーバー起動 (`node dist/index.js`)
- `npm run lint` — ESLint 実行
- `npm run typecheck` — 型チェック (`tsc --noEmit`)

テストフレームワークは未導入。品質チェックは `npm run lint` と `npm run typecheck` で行う。

## アーキテクチャ

```
src/
├── index.ts              # エントリーポイント: McpServer 生成 + stdio トランスポート接続
└── tools/
    └── previewPptx.ts    # preview_pptx ツール: PPTX → SVG 変換
```

- `src/index.ts` で `McpServer` を生成し、各ツール登録関数を呼び出す構成
- ツールは `src/tools/` 配下に `register*Tool(server: McpServer)` 関数として実装し、`index.ts` から登録する
- PPTX → SVG 変換には `pptx-glimpse` ライブラリを使用
- 入力バリデーションには `zod` を使用（MCP SDK のツール定義と統合）
