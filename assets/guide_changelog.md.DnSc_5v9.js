import{_ as e,c as o,o as c,a4 as d}from"./chunks/framework.BD8NSaBJ.js";const b=JSON.parse('{"title":"📠 更新日志","description":"","frontmatter":{},"headers":[],"relativePath":"guide/changelog.md","filePath":"guide/changelog.md","lastUpdated":1710341824000}'),l={name:"guide/changelog.md"},i=d('<h1 id="📠-更新日志" tabindex="-1">📠 更新日志 <a class="header-anchor" href="#📠-更新日志" aria-label="Permalink to &quot;📠 更新日志&quot;">​</a></h1><h2 id="_9-8-1" tabindex="-1">9.8.1 <a class="header-anchor" href="#_9-8-1" aria-label="Permalink to &quot;9.8.1&quot;">​</a></h2><p><code>2024-03-13</code></p><ul><li>🐞 修复初始化<code>layout</code>只指定<code>xAxis</code>时，导致图表无法初始化问题。</li><li>🐞 修复内置指标<code>VOL</code>修改<code>calcParams</code>时出错问题。</li><li>💄 优化y轴小数折叠显示时计算的宽度准确度。</li><li>💄 优化滚轮事件触发。</li></ul><h2 id="_9-8-0" tabindex="-1">9.8.0 <a class="header-anchor" href="#_9-8-0" aria-label="Permalink to &quot;9.8.0&quot;">​</a></h2><p><code>2024-03-04</code></p><ul><li>🆕 支持自定义坐标轴。</li><li>🆕 支持指标绘制到未来时间。</li><li>🆕 支持长小数折叠。</li><li>🆕 支持向前和向后添加数据。</li><li>🐞 修复不同浏览器格式化时间问题。</li></ul><h2 id="_9-7-2" tabindex="-1">9.7.2 <a class="header-anchor" href="#_9-7-2" aria-label="Permalink to &quot;9.7.2&quot;">​</a></h2><p><code>2024-01-12</code></p><ul><li>🐞 修复指标属性 <code>minValue</code> 和 <code>maxValue</code> 不生效问题。</li><li>🐞 修复覆盖物x轴上显示问题。</li><li>💄 优化样式 <code>candle.type: &#39;ohlc&#39;</code> 显示。</li><li>💄 优化绘制清晰度。</li></ul><h2 id="_9-7-1" tabindex="-1">9.7.1 <a class="header-anchor" href="#_9-7-1" aria-label="Permalink to &quot;9.7.1&quot;">​</a></h2><p><code>2023-12-18</code></p><ul><li>🐞 修复指标和覆盖物方法不执行问题。</li><li>🐞 修复包管理器下载node版本依赖问题。</li></ul><h2 id="_9-7-0" tabindex="-1">9.7.0 <a class="header-anchor" href="#_9-7-0" aria-label="Permalink to &quot;9.7.0&quot;">​</a></h2><p><code>2023-12-12</code></p><ul><li>🆕 实例方法新增<code>setMaxOffsetLeftDistance</code>和<code>setMaxOffsetRightDistance</code>。</li><li>🆕 指标新增<code>zLevel</code>属性。</li><li>💄 优化<code>ohlc</code>蜡烛柱渲染。</li><li>🐞 修复蜡烛柱模糊问题。</li><li>🐞 修复覆盖物<code>zLevel</code>渲染规则。</li></ul><h2 id="_9-6-0" tabindex="-1">9.6.0 <a class="header-anchor" href="#_9-6-0" aria-label="Permalink to &quot;9.6.0&quot;">​</a></h2><p><code>2023-11-14</code></p><ul><li>🖋️ 重构窗口之间的分割线模块。</li><li>🆕 图表方法<code>init(ds, options)</code>，参数<code>options</code>新增<code>layout</code>。</li><li>🆕 实例方法<code>createIndicator(value, isStack, paneOptions, callback)</code>，参数<code>paneOptions</code>新增<code>position</code>。</li><li>🆕 样式<code>candle.tooltip.custom</code>新增<code>turnover</code>字符串模版。</li><li>💄 优化样式<code>overlay.text</code>配置。</li><li>💄 优化<code>utils.clone</code>和<code>utils.merge</code>实现。</li><li>🐞 修复多个覆盖物样式显示不对问题。</li><li>🐞 修复多个指标样式显示不对问题。</li></ul><h2 id="_9-5-4" tabindex="-1">9.5.4 <a class="header-anchor" href="#_9-5-4" aria-label="Permalink to &quot;9.5.4&quot;">​</a></h2><p><code>2023-09-22</code></p><ul><li>🐞 修复样式<code>candle.type</code>是<code>area</code>时，最新价线不显示问题。</li><li>🐞 修复样式<code>crosshair.vertical.text.paddingLeft</code>显示不对问题。</li></ul><h2 id="_9-5-3" tabindex="-1">9.5.3 <a class="header-anchor" href="#_9-5-3" aria-label="Permalink to &quot;9.5.3&quot;">​</a></h2><p><code>2023-09-19</code></p><ul><li>🐞 修复ts下引入问题。</li></ul><h2 id="_9-5-2" tabindex="-1">9.5.2 <a class="header-anchor" href="#_9-5-2" aria-label="Permalink to &quot;9.5.2&quot;">​</a></h2><p><code>2023-09-18</code></p><ul><li>💄 优化基础图形<code>text</code>。</li><li>💄 优化内置覆盖物<code>simpleAnnotation</code>和<code>simpleTag</code>。</li><li>💄 优化技术指标自由样式，支持增量。</li><li>🐞 修复typescript声明问题。</li></ul><h2 id="_9-5-1" tabindex="-1">9.5.1 <a class="header-anchor" href="#_9-5-1" aria-label="Permalink to &quot;9.5.1&quot;">​</a></h2><p><code>2023-08-14</code></p><ul><li>🆕 图表方法新增<code>getOverlayClass</code>。</li><li>🆕 样式配置<code>candle.tooltip.custom</code>新增内置涨跌幅支持。</li><li>💄 优化基础图形<code>rect</code>事件响应。</li><li>↩️ 分割线事件响应回退</li></ul><h2 id="_9-5-0" tabindex="-1">9.5.0 <a class="header-anchor" href="#_9-5-0" aria-label="Permalink to &quot;9.5.0&quot;">​</a></h2><p><code>2023-06-15</code></p><ul><li>🆕 <code>Overlay</code>新增事件<code>onDoubleClick</code>，新增属性<code>modeSensitivity</code>。</li><li>🆕 样式配置<code>candle.tooltip.custom</code>支持字符串模版。</li><li>🐞 优化移动端阻尼滚动掉帧问题。</li><li>🐞 修复窗口id命名拼写错误。</li><li>💄 优化分割线事件响应灵敏度。</li><li>💄 优化typescript下，OverlayFigure中的attrs类型声明。</li></ul><h2 id="_9-4-0" tabindex="-1">9.4.0 <a class="header-anchor" href="#_9-4-0" aria-label="Permalink to &quot;9.4.0&quot;">​</a></h2><p><code>2023-05-25</code></p><ul><li>🆕 实例api <code>createOverlay</code> 支持数组。</li><li>🆕 <code>overlay</code>新增属性<code>paneId</code>，<code>defaultZLevel</code>和<code>zLevel</code>。</li><li>🆕 <code>xAxis</code>新增方法<code>convertTimestampFromPixel</code>和<code>convertTimestampToPixel</code>。</li><li>💄 优化蜡烛柱显示。</li></ul><h2 id="_9-3-0" tabindex="-1">9.3.0 <a class="header-anchor" href="#_9-3-0" aria-label="Permalink to &quot;9.3.0&quot;">​</a></h2><p><code>2023-05-13</code></p><ul><li>🆕 新增图表API <code>utils.calcTextWidth</code>。</li><li>🆕 图表API <code>createIndicator(value, isStack, options)</code>和<code>setPaneOptions(options)</code>新增<code>options.axisOptions</code>。</li><li>🆕 指标图形配置支持自定义。</li><li>💄 优化bar宽度比例。</li><li>💄 优化内部获取屏幕像素比。</li><li>💄 优化内部id生成。</li></ul><h2 id="_9-2-2" tabindex="-1">9.2.2 <a class="header-anchor" href="#_9-2-2" aria-label="Permalink to &quot;9.2.2&quot;">​</a></h2><p><code>2023-05-04</code></p><ul><li>🐞 修复基础图形<code>line</code>事件检查可能导致错误问题。</li><li>💄 优化类型检查。</li></ul><h2 id="_9-2-1" tabindex="-1">9.2.1 <a class="header-anchor" href="#_9-2-1" aria-label="Permalink to &quot;9.2.1&quot;">​</a></h2><p><code>2023-04-27</code></p><ul><li>💄 优化默认样式，<code>#EF5350</code>变更为<code>#F92855</code>，<code>#26A69A</code>变更为<code>#2DC08E</code>。</li><li>💄 优化typescript声明。</li></ul><h2 id="_9-2-0" tabindex="-1">9.2.0 <a class="header-anchor" href="#_9-2-0" aria-label="Permalink to &quot;9.2.0&quot;">​</a></h2><p><code>2023-04-24</code></p><ul><li>🆕 实例API新增<code>getOffsetRightDistance</code>和<code>executeAction</code>。</li><li>🆕 实例API<code>applyNewData</code>、<code>applyMoreData</code>和<code>updateData</code>新增成功回调入参<code>callback</code>。</li><li>🆕 支持千分符显示。</li><li>🆕 样式配置新增<code>candle.bar.upBorderColor</code>、<code>candle.bar.downBorderColor</code>、<code>candle.bar.noChangeBorderColor</code>、<code>candle.bar.upWickColor</code>、<code>candle.bar.downWickColor</code>、<code>candle.bar.noChangeWickColor</code>、<code>candle.tooltip.rect.position</code>和<code>candle.tooltip.rect.offsetBottom</code>。</li><li>🆕 所有<code>visibleRange</code>新增<code>realFrom</code>和<code>realTo</code>。</li><li>💄 优化API，<code>klinecharts.utils.isValid</code>和<code>klinecharts.utils.formatBigNumber</code>。</li><li>💄 优化开发环境下，日志输出。</li></ul><h2 id="_9-1-3" tabindex="-1">9.1.3 <a class="header-anchor" href="#_9-1-3" aria-label="Permalink to &quot;9.1.3&quot;">​</a></h2><p><code>2023-04-15</code></p><ul><li>🐞 修复图表api <code>applyNewData</code> 入参是空数组时不刷新问题。</li><li>🐞 修复无数据时y轴上十字光标文字不显示问题。</li><li>💄 优化面积图显示。</li><li>💄 优化覆盖物事件回调参数，新增<code>figureKey</code>和<code>figureIndex</code>。</li><li>💄 优化typescript覆盖物样式类型，和基础类型<code>DeepPartial</code>, <code>DeepRequired</code>。</li></ul><h2 id="_9-1-2" tabindex="-1">9.1.2 <a class="header-anchor" href="#_9-1-2" aria-label="Permalink to &quot;9.1.2&quot;">​</a></h2><p><code>2023-04-10</code></p><ul><li>🐞 修复内置基础图形<code>line</code>触发事件不准确问题。</li><li>🐞 修复内置覆盖物<code>simpleAnnotation</code>和<code>simpleTag</code>绘制完成后第一次触发事件问题。</li><li>💄 优化覆盖物图形事件忽略，支持事件选择。</li></ul><h2 id="_9-1-1" tabindex="-1">9.1.1 <a class="header-anchor" href="#_9-1-1" aria-label="Permalink to &quot;9.1.1&quot;">​</a></h2><p><code>2023-03-14</code></p><ul><li>🐞 修复内置基础图形<code>arc</code>不生效问题。</li><li>💄 优化渲染更新。</li></ul><h2 id="_9-1-0" tabindex="-1">9.1.0 <a class="header-anchor" href="#_9-1-0" aria-label="Permalink to &quot;9.1.0&quot;">​</a></h2><p><code>2023-02-23</code></p><ul><li>🆕 图表实例方法<code>subscribeAction</code>和<code>unsubscribeAction</code>类型新增<code>onCandleBarClick</code>。</li><li>🆕 覆盖物支持双击强制结束绘制。</li><li>💄 优化事件处理。</li></ul><h2 id="_9-0-1" tabindex="-1">9.0.1 <a class="header-anchor" href="#_9-0-1" aria-label="Permalink to &quot;9.0.1&quot;">​</a></h2><p><code>2023-02-17</code></p><ul><li>🐞 修复typescript引入问题。</li></ul><h2 id="_9-0-0" tabindex="-1">9.0.0 <a class="header-anchor" href="#_9-0-0" aria-label="Permalink to &quot;9.0.0&quot;">​</a></h2><p><code>2023-02-16</code></p><ul><li>🛠 Typescript重构。</li><li>🆕 新特性 <ul><li>新增Y轴方向缩放，滚动。</li><li>API <ul><li>新增基图表方法<code>registerFigure</code>，<code>getSupportFigures</code>，<code>getFigureClass</code>，<code>rigisterOverlay</code>，<code>getSupportOverlays</code>，<code>registerLocale</code>，<code>getSupportLocales</code>，<code>registerStyles</code>。</li><li>新增实例方法，<code>getSize</code>，<code>setLocale</code>，<code>getLocal</code>，<code>setCustomApi</code>，<code>getVisibleRange</code>，<code>createOverlay</code>，<code>getOverlayById</code>，<code>overrideOverlay</code>，<code>removeOverlay</code>。</li></ul></li><li>样式配置 <ul><li>新增<code>candle.priceMark.last.text.borderStyle</code>，<code>candle.tooltip.icons</code>，<code>indicator.lastValueMark.text.borderStyle</code>，<code>indicator.tooltip.icons</code>，<code>crosshair.horizontal.text.borderStyle</code>，<code>crosshair.vertical.text.borderStyle</code>。</li></ul></li></ul></li><li>👉 变更 <ul><li>API <ul><li>图表方法<code>extension.addTechnicalIndicatorTemplate</code>变更为<code>registerIndicator</code>。</li><li>图表方法<code>extension.addShapeTemplate</code>变更为<code>registerOverlay</code>。</li><li>实例方法<code>setStyleOptions</code>变更为<code>setStyles</code>。</li><li>实例方法<code>getStyleOptions</code>变更为<code>getStyles</code>。</li><li>实例方法<code>setPaneOptions(options)</code>，<code>options</code>新增属性<code>gap</code>。</li><li>实例方法<code>setOffsetRightSpace</code>变更为<code>setOffsetRightDistance</code>。</li><li>实例方法<code>createTechnicalIndicator</code>变更为<code>createIndicator</code>。</li><li>实例方法<code>overlayTechnicalIndicator</code>变更为<code>overlayIndicator</code>。</li><li>实例方法<code>getTechnicalIndicatorByPaneId</code>变更为<code>getIndicatorByPaneId</code>。</li><li>实例方法<code>removeTechnicalIndicator</code>变更为<code>removeIndicator</code>。</li></ul></li><li>样式配置 <ul><li>所有<code>line.style</code>选项变更为<code>solid</code>和<code>dashed</code>。</li><li>所有<code>dashValue</code>变更为<code>dashedValue</code>。</li><li><code>xAxis.height</code>变更为<code>xAxis.size</code>，<code>xAxis.tickText.paddingTop</code>变更为<code>xAxis.tickText.marginStart</code>，<code>xAxis.tickText.paddingBottom</code>变更为<code>xAxis.tickText.marginEnd</code>。</li><li><code>yAxis.height</code>变更为<code>yAxis.size</code>，<code>yAxis.tickText.paddingTop</code>变更为<code>yAxis.tickText.marginStart</code>，<code>yAxis.tickText.paddingBottom</code>变更为<code>yAxis.tickText.marginEnd</code>。</li><li><code>technicalIndicator.bar</code>变更为<code>indicator.bars</code>，<code>technicalIndicator.line</code>变更为<code>indicator.lines</code>，<code>technicalIndicator.circle</code>变更为<code>indicator.circles</code>。</li></ul></li><li>自定义扩展 <ul><li>技术指标属性<code>calcParams</code>，变更为支持任意类型。</li><li>技术指标属性<code>plots</code>变更为<code>figures</code>。</li><li>技术指标属性<code>regeneratePlots</code>变更为<code>regeneratefigures</code>。</li><li>技术指标属性<code>calcTechnicalIndicator</code>变更为<code>calc</code>。</li><li>技术指标属性<code>render</code>变更为<code>draw</code>。</li></ul></li></ul></li><li>🗑 废弃 <ul><li>API <ul><li>删除实例方法<code>getWidth</code>，<code>getHeight</code>，改用<code>getSize</code>。</li><li>删除实例方法<code>createShape</code>，<code>createAnnotation</code>，<code>createTag</code>，改用<code>createOverlay</code>。</li><li>删除实例方法<code>removeShape</code>，<code>removeAnnotation</code>，<code>removeTag</code>，改用<code>removeOverlay</code>。</li><li>删除实例方法<code>setShapeOptions</code>，改用<code>overrideOverlay</code>。</li><li>删除实例方法<code>createHtml</code>，<code>removeHtml</code>，<code>addTechnicalIndicatorTemplate</code>，<code>getTechnicalIndicatorTemplate</code>，<code>addShapeTemplate</code>。</li></ul></li><li>样式配置 <ul><li>删除<code>shape</code>，<code>annotation</code>，<code>tag</code>，改用<code>overlay</code>。</li><li>删除<code>candle.margin</code>，<code>technicalIndicator.margin</code>。</li></ul></li><li>自定义扩展 <ul><li>技术指标模版不再保存相关属性。</li><li>技术指标删除属性<code>shouldCheckParamCount</code>。</li><li>删除<code>Shape</code>，改用<code>Overlay</code>。</li></ul></li></ul></li></ul><h2 id="_8-x" tabindex="-1">8.x <a class="header-anchor" href="#_8-x" aria-label="Permalink to &quot;8.x&quot;">​</a></h2><p>去<a href="https://github.com/liihuu/KLineChart/blob/v8.6.3/docs/zh-CN/changelog.md" target="_blank" rel="noreferrer">Github</a>上查看 8.x 的 Change Log。</p><h2 id="_7-x" tabindex="-1">7.x <a class="header-anchor" href="#_7-x" aria-label="Permalink to &quot;7.x&quot;">​</a></h2><p>去<a href="https://github.com/liihuu/KLineChart/blob/v7.5.0/docs/zh-CN/changelog.md" target="_blank" rel="noreferrer">Github</a>上查看 7.x 的 Change Log。</p><h2 id="_6-x" tabindex="-1">6.x <a class="header-anchor" href="#_6-x" aria-label="Permalink to &quot;6.x&quot;">​</a></h2><p>去<a href="https://github.com/liihuu/KLineChart/blob/v6.1.0/docs/zh-CN/CHANGELOG.md" target="_blank" rel="noreferrer">Github</a>上查看 6.x 的 Change Log。</p><h2 id="_5-x" tabindex="-1">5.x <a class="header-anchor" href="#_5-x" aria-label="Permalink to &quot;5.x&quot;">​</a></h2><p>去<a href="https://github.com/liihuu/KLineChart/releases/tag/v5.0.0" target="_blank" rel="noreferrer">Github</a>上查看 5.x 的版本记录。</p><h2 id="_4-x" tabindex="-1">4.x <a class="header-anchor" href="#_4-x" aria-label="Permalink to &quot;4.x&quot;">​</a></h2><p>去<a href="https://github.com/liihuu/KLineChart/releases/tag/v4.0.0" target="_blank" rel="noreferrer">Github</a>上查看 4.x 的版本记录。</p>',77),a=[i];function t(r,n,h,s,u,p){return c(),o("div",null,a)}const g=e(l,[["render",t]]);export{b as __pageData,g as default};
