import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.21ffe4b0.js";const m=JSON.parse('{"title":"📚 数据","description":"","frontmatter":{},"headers":[],"relativePath":"guide/datasource.md","filePath":"guide/datasource.md","lastUpdated":1692476796000}'),p={name:"guide/datasource.md"},o=l(`<h1 id="📚-数据" tabindex="-1">📚 数据 <a class="header-anchor" href="#📚-数据" aria-label="Permalink to &quot;📚 数据&quot;">​</a></h1><p>图表所需要的数据必须是固定格式。通过图表实例 API <a href="./instance-api.html#applynewdata-datalist-more">applyNewData(dataList, more)</a>，<a href="./instance-api.html#applymoredatadatalist-more">applyMoreData(dataList, more)</a>和<a href="./instance-api.html#updatedatadata">updateData(data)</a>来和图表进行数据交互。</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 时间戳，毫秒级别，必要字段</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">timestamp</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">number</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 开盘价，必要字段</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">open</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">number</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 收盘价，必要字段</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">close</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">number</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 最高价，必要字段</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">high</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">number</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 最低价，必要字段</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">low</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">number</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 成交量，非必须字段</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">volume</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">number</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 成交额，非必须字段，如果需要展示技术指标&#39;EMV&#39;和&#39;AVP&#39;，则需要为该字段填充数据。</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">turnover</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">number</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 时间戳，毫秒级别，必要字段</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">timestamp</span><span style="color:#24292E;">: number</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 开盘价，必要字段</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">open</span><span style="color:#24292E;">: number</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 收盘价，必要字段</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">close</span><span style="color:#24292E;">: number</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 最高价，必要字段</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">high</span><span style="color:#24292E;">: number</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 最低价，必要字段</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">low</span><span style="color:#24292E;">: number</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 成交量，非必须字段</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">volume</span><span style="color:#24292E;">: number</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 成交额，非必须字段，如果需要展示技术指标&#39;EMV&#39;和&#39;AVP&#39;，则需要为该字段填充数据。</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">turnover</span><span style="color:#24292E;">: number</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,3),e=[o];function t(c,r,y,i,F,D){return a(),n("div",null,e)}const E=s(p,[["render",t]]);export{m as __pageData,E as default};
