# Imersão React - Alura

## Config inicial

```bash
npm install next react react-dom
```

>tip: No **package.json**, nas **dependencies** retirar o sinal **^** para que a versão seja padrão para quem for rodar / configurar a aplicação em outra máquina depois. Com o sinal **^**, o node entende que se houver uma versão maior que a atual, ele poderá atualizar. Podendo assim gerar problemas de imcompatibilidade.

## Styling

```bash
npm install styled-components
```

## Git

```bash
npx gitignore node
```


## Estrutura projeto

- `_app.js`: Carrega o setup base do projeto
    - Também estão os **Providers** de informação do projeto
    - CSSReset