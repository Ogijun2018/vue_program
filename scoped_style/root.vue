<!-- スコープ付きCSSのメリット 
  複数の単一ファイルコンポーネントを組み合わせた例 -->
<template>
  <div id="root">
    <h1 class="header">Rootコンポーネント</h1>
    <p>これはRootコンポーネントです。</p>
    <foo/><bar/>
  </div>
</template>
<script>
import Foo from './foo'
import Bar from './bar'
export default {
  components: { Foo, Bar }
}
</script>
<style scoped>
#root { border: solid 1px blue; margin: 4px; padding: 4px;}
.header { font-size: 200%; }
p { text-decoration: underline; }
</style>