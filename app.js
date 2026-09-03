const app = document.getElementById("app");
const portal = document.getElementById("portal");

const projectIconNames = {
  logoFull: "logonewtext",
  logoMark: "logoonyimg",
  logoText: "logonewtext",
  frontApp: "zhinengti2",
  treeFolder: "wenjianjia1",
  treeFile: "wendang",
  treeKnowledge: "knowledge",
  recallTest: "recall",
  apiCall: "api",
  uploadDoc: "shangchuan",
  batchCopy: "copy",
  batchConfig: "configuration",
  batchDelete: "delete",
  addSquare: "add",
  rowMore: "more-k2a8je9g",
  filter: "filter",
  filterSearch: "search",
  filterChevron: "arrowdown",
  filterCalendar: "history",
  calendarPrev: "fanhui",
  calendarNext: "right",
  check: "yes",
  uploadBox: "shangchuan",
  trash: "delete",
  wordFile: "word-j7a61f4b",
  pdfFile: "pdf",
  pptFile: "ppt",
  excelFile: "xlsxxls",
  mdFile: "md",
  htmlFile: "htmlhtm",
  txtFile: "txt",
  segmentAutoRobot: "automatic",
  segmentCustomControls: "customize",
  segmentComponentBlocks: "segmentation",
  info: "help",
  collapseList: "caidan",
  home: "shouye",
  robot: "zhinengti",
  book: "zhishiku",
  tool: "gongju",
  cube: "moxing",
  evaluate: "pingce",
  system: "xitong",
  frontAttachment: "link",
  frontGlobe: "search",
  frontKnowledge: "zhishiku",
  frontThought: "help",
  frontSend: "send",
  frontStop: "clouse",
  frontDownload: "down",
  frontCopy: "copy",
  frontImage: "image",
  frontMore: "more-k2a8je9g",
  frontSparkle: "script-kmd66ffn",
  frontLightning: "Skill",
  frontToken: "yeyuwu",
  frontChevronRight: "fanhui",
  frontActionRefresh: "refresh",
  frontActionLike: "thumbsup",
  frontActionDislike: "thumbsdown",
  frontActionShare: "share1",
};

const icons = {
  logo: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><path fill="currentColor" d="M7 37V11a6 6 0 0 1 6-6h22v26H13c-3.3 0-6 2.684-6 6Z"/><path fill="currentColor" stroke-linecap="round" d="M35 31H13a6 6 0 0 0 0 12h28V7M14 37h20"/></g></svg>',
  home: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><path fill="currentColor" d="M44 44V20L24 4L4 20v24h12V26h16v18z"/><path fill="currentColor" stroke-linecap="round" d="M24 44V34"/></g></svg>',
  robot: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-width="4"><path fill="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5 35a2 2 0 0 1 2-2h34a2 2 0 0 1 2 2v7H5zm37-17h-8l-6-6l6-6h8"/><circle fill="currentColor" cx="8" cy="12" r="4"/><path fill="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12 12h16m-18 4l8 17"/></g></svg>',
  book: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4" d="M5 7h11a8 8 0 0 1 8 8v27a6 6 0 0 0-6-6H5zm38 0H32a8 8 0 0 0-8 8v27a6 6 0 0 1 6-6h13z"/></svg>',
  tool: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><path fill="currentColor" d="M32 16c0-6.075-3.582-12-8-12s-8 5.925-8 12m-7 0h30l1 12H27v-3h-6v3H8zM8 28L6 42h36l-2-14"/><path fill="currentColor" d="M21 25h6v6h-6z"/></g></svg>',
  cube: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M15.5 9L7 14v20l8.5 5l8.5 5l8.5-5l8.5-5V14l-8.5-5L24 4zM41 14L24 24M7 14l17 10m0 20V24m8-5v20m9-15L24 34m0 0L7 24m9 15V19M32 9L16 19m16 0L16 9"/></svg>',
  evaluate: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><path fill="currentColor" d="M6 6v36h36"/><path fill="currentColor" d="m14 34l8-16l10 9L42 6"/></g></svg>',
  system: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><path fill="currentColor" d="M18.284 43.171a20 20 0 0 1-8.696-5.304a6 6 0 0 0-5.182-9.838A20 20 0 0 1 4 24c0-2.09.32-4.106.916-6H5a6 6 0 0 0 5.385-8.65a20 20 0 0 1 8.267-4.627A6 6 0 0 0 24 8a6 6 0 0 0 5.348-3.277a20 20 0 0 1 8.267 4.627A6 6 0 0 0 43.084 18A20 20 0 0 1 44 24c0 1.38-.14 2.728-.406 4.03a6 6 0 0 0-5.182 9.838a20 20 0 0 1-8.696 5.303a6.003 6.003 0 0 0-11.432 0Z"/><path fill="currentColor" d="M24 31a7 7 0 1 0 0-14a7 7 0 0 0 0 14Z"/></g></svg>',
  menu: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M8 11h32M8 24h32M8 37h32m-26.343-7.343L8 24l5.657-5.657"/></svg>',
  search: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><path fill="currentColor" d="M21 38c9.389 0 17-7.611 17-17S30.389 4 21 4S4 11.611 4 21s7.611 17 17 17Z"/><path fill="currentColor" stroke-linecap="round" d="M26.657 14.343A7.98 7.98 0 0 0 21 12a7.98 7.98 0 0 0-5.657 2.343m17.879 18.879l8.485 8.485"/></g></svg>',
  chevron: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M36 18L24 30L12 18"/></svg>',
  close: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m14 14l20 20m0-20L14 34"/></svg>',
  app: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><path fill="currentColor" d="M41 14L24 4L7 14v20l17 10l17-10z"/><path fill="currentColor" stroke-linecap="round" d="M16 18.998L23.993 24l8.002-5.002M24 24v9"/></g></svg>',
  user: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><circle fill="currentColor" cx="24" cy="12" r="8"/><path fill="currentColor" d="M42 44c0-9.941-8.059-18-18-18S6 34.059 6 44"/></g></svg>',
  fullscreen: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M33 6h9v9m0 18v9h-9m-18 0H6v-9m0-18V6h9"/></svg>',
  plus: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m24.06 10l-.036 28M10 24h28"/></svg>',
  more: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><circle cx="12" cy="24" r="3" fill="currentColor"/><circle cx="24" cy="24" r="3" fill="currentColor"/><circle cx="36" cy="24" r="3" fill="currentColor"/></svg>',
  calendar: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><path fill="currentColor" d="M5 19h38v21a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2zM5 9a2 2 0 0 1 2-2h34a2 2 0 0 1 2 2v10H5z"/><path fill="currentColor" stroke-linecap="round" d="M16 4v8m16-8v8m-4 22h6m-20 0h6m8-8h6m-20 0h6"/></g></svg>',
  folder: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><path fill="currentColor" d="M4 9v32l5-20h30.5v-6a2 2 0 0 0-2-2H24l-5-6H6a2 2 0 0 0-2 2"/><path fill="currentColor" d="m40 41l4-20H8.813L4 41z"/></g></svg>',
  file: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-width="4"><path fill="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10 38v6h28v-6m0-18v-6L30 4H10v16"/><path fill="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28 4v10h10"/><path fill="currentColor" stroke-linecap="round" d="M16 12h4"/><rect fill="currentColor" width="40" height="18" x="4" y="20" stroke-linejoin="round" rx="2"/><path fill="currentColor" stroke-linecap="round" d="M10 25v8"/><path fill="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10 25h2a4 4 0 0 1 4 4v0a4 4 0 0 1-4 4h-2"/><ellipse fill="currentColor" cx="24" cy="29" stroke-linecap="round" stroke-linejoin="round" rx="3" ry="4"/><path fill="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38 25h-2a4 4 0 0 0-4 4v0a4 4 0 0 0 4 4h2"/></g></svg>',
  swap: '<path d="M7 8h10"/><path d="m13 5 4 3-4 3"/><path d="M17 16H7"/><path d="m11 13-4 3 4 3"/>',
  star: '<path d="m12 3 2.6 5.3 5.8.8-4.2 4.1 1 5.8L12 16.7 6.8 19l1-5.8L3.6 9.1l5.8-.8z"/>',
  chart: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><path fill="currentColor" d="M6 42h36M14 42V26m10 16V14m10 28V22"/></g></svg>',
};

const uploadProgressTimers = new Map();
const MAX_UPLOAD_FILES = 50;

const SYSTEM_TREE = [
  { label: "集团总公司", children: ["集团领导", "数字智能部"] },
  { label: "数字智能部", children: ["基础设施部", "系统建设部", "数据平台部", "数智战略部"] },
  { label: "科技创新部", children: ["综合规划部", "研发管理部", "生产运营部", "综合监督部"] },
  { label: "试用部门", children: ["历史试用部门", "研发部门", "售前/销售部门", "客户试用部门"] },
];

const menuItems = [
  { label: "首页", path: "/analytics", icon: "home" },
  {
    label: "智能体",
    icon: "robot",
    children: [
      { label: "智能体管理", path: "/dashboard/robotList" },
      { label: "数据中心", path: "/dashboard/data-center" },
    ],
  },
  {
    label: "知识库",
    icon: "book",
    children: [
      { label: "文档管理", path: "/manage/management" },
      { label: "FAQ管理", path: "/manage/faq" },
      { label: "图谱管理", path: "/manage/graphList" },
    ],
  },
  {
    label: "工具",
    icon: "tool",
    children: [
      { label: "工作流", path: "/extension/workflow_list" },
      { label: "技能", path: "/extension/skills" },
      { label: "MCP", path: "/extension/mcp" },
      { label: "API", path: "/extension/APIplugin" },
      { label: "处理组件", path: "/extension/modeltool" },
    ],
  },
  {
    label: "模型",
    icon: "cube",
    children: [{ label: "模型管理", path: "/modelService/gorithmmodel" }],
  },
  {
    label: "评测",
    icon: "evaluate",
    children: [
      { label: "评测任务", path: "/evaluating/task" },
      { label: "评测集", path: "/evaluating/collect" },
      { label: "评估器", path: "/evaluating/evaluation" },
    ],
  },
  {
    label: "系统管理",
    icon: "system",
    children: [
      { label: "用户管理", path: "/system/user" },
      { label: "角色管理", path: "/system/role" },
      { label: "菜单管理", path: "/system/menu" },
      { label: "部门管理", path: "/system/dept" },
      { label: "字典管理", path: "/system/dict" },
      { label: "系统模型配置", path: "/system/model-config" },
      { label: "参数设置", path: "/system/parameter" },
      { label: "数据监控", path: "/system/monitor" },
    ],
  },
];

function defaultOpenGroups(path) {
  for (const item of menuItems) {
    if (item.children && item.children.some((child) => child.path === path)) {
      return [item.label];
    }
  }
  return [];
}

const state = {
  path: location.hash.slice(1) || "/analytics",
  openGroups: new Set(defaultOpenGroups(location.hash.slice(1) || "/analytics")),
  tabs: ["/analytics"],
  drawer: null,
  filterMenuKey: "",
  filterControlKey: "",
  filterValues: {},
  handlers: {},
  handlerSeed: 0,
  resetMainScroll: false,
  pageViews: {
    "/dashboard/robotList": "智能体中心",
    "/extension/workflow_list": "工具中心",
    "/extension/skills": "技能中心",
    "/dashboard/data-center": "对话记录",
  },
  docManagement: {
    activeNode: "互联网行业研究0603",
    expandedNodes: new Set(["行业研究", "一级", "test-test"]),
    treeQuery: "",
    treeVariant: "icon3",
    selectedRows: new Set(),
    rowMenu: "",
    configView: null,
    uploadView: null,
    sliceView: null,
  },
  frontChat: {
    view: "chat",
    mode: "agent",
    composerMenu: "",
    activeAgent: "深度创作",
    activeHistory: "",
    input: "",
    selectedKnowledge: false,
    selectedSkill: "",
    activeExpertTab: "专家",
    activeExpertCategory: "全部",
    activeAutomationTab: "自动化列表",
    activeFileFilter: "全部",
    selectedFiles: new Set(),
    filesPanel: null,
    fileDetail: "",
    tokenOpen: false,
    sourceOpen: "",
    thinkingCollapsed: false,
    conversations: [],
  },
};

function createUploadView() {
  return {
    step: 1,
    mode: "split",
    category: "全部",
    segment: "auto",
    component: "法律合同审查",
    formatAlgorithms: createFormatAlgorithmState(),
    showFileList: true,
    activeSlice: 0,
    activeUploadFileId: "",
    files: [],
    checks: {
      cleanSpaces: true,
      removeLinks: false,
      table: false,
      image: false,
      keyword: false,
      summary: false,
    },
  };
}

function createDocProcessView(overrides = {}) {
  const base = createUploadView();
  return {
    ...base,
    ...overrides,
    checks: {
      ...base.checks,
      ...(overrides.checks || {}),
    },
  };
}

const DOC_MANAGEMENT_TREE = [
  {
    label: "行业研究",
    kind: "directory",
    children: [
      { label: "互联网行业研究0603", kind: "knowledge", docs: 4 },
      { label: "召回测试", kind: "knowledge", docs: 4 },
      {
        label: "一级",
        kind: "directory",
        children: [
          {
            label: "test-test",
            kind: "directory",
            children: [
              { label: "0601", kind: "knowledge", docs: 1 },
            ],
          },
        ],
      },
      { label: "AI知识", kind: "knowledge", docs: 7 },
    ],
  },
  { label: "金融知识库", kind: "knowledge", docs: 12, dirs: 0 },
  {
    label: "能源行业",
    kind: "directory",
    children: [
      {
        label: "新能源",
        kind: "directory",
        children: [
          { label: "氢能源行业知识库", kind: "knowledge", docs: 2 },
          {
            label: "电池行业",
            kind: "directory",
            children: [
              { label: "固态电池知识库", kind: "knowledge", docs: 4 },
              { label: "锂电池知识库", kind: "knowledge", docs: 3 },
              { label: "铅酸电池知识库", kind: "knowledge", docs: 1 },
            ],
          },
        ],
      },
      { label: "传统能源知识库", kind: "knowledge", docs: 2 },
    ],
  },
  { label: "天气知识库", kind: "knowledge", docs: 8, dirs: 0 },
  { label: "知识运行问答", kind: "knowledge", docs: 3, dirs: 0 },
];

const DOC_MANAGEMENT_ROWS = [
  {
    id: "doc-1",
    index: "1",
    name: "固态电池安全标准汇编.pdf",
    format: "PDF",
    slices: "-",
    status: tag("排队中", "warning"),
    statusText: "排队中",
    labels: "-",
    createdAt: "2025-09-09 22:00:00",
    canBatch: false,
    ops: "queued",
    queuePosition: 2,
    queueTotal: 7,
  },
  {
    id: "doc-2",
    index: "2",
    name: "这是文档名称这是文档名称",
    format: "PDF",
    slices: "1",
    status: tag("文件解析中 | 20%", "primary"),
    statusText: "文件解析中",
    labels: "-",
    createdAt: "2025-09-09 22:00:00",
    canBatch: false,
    ops: "parsing",
    progress: 20,
  },
  {
    id: "doc-3",
    index: "3",
    name: "这是文档名称这是文档名称这是",
    format: "DOCX",
    slices: "1",
    status: tag("文件增强中 | 20%", "primary"),
    statusText: "文件增强中",
    labels: "-",
    createdAt: "2025-09-09 22:00:00",
    canBatch: false,
    ops: "enhancing",
    progress: 20,
  },
  {
    id: "doc-4",
    index: "4",
    name: "这是文档名称这是文档名称这是这是这文...",
    format: "XLSX",
    slices: "1",
    status: tag("处理失败", "danger"),
    statusText: "处理失败",
    labels: "-",
    createdAt: "2025-09-09 22:00:00",
    canBatch: true,
    ops: "failed",
    switchOn: false,
  },
  {
    id: "doc-5",
    index: "5",
    name: "固态电池行业研究报告.pdf",
    format: "PDF",
    slices: "36",
    status: tag("处理完成", "success"),
    statusText: "处理完成",
    labels: chips(["研报", "PDF"]),
    createdAt: "2025-09-09 22:00:00",
    canBatch: true,
    ops: "done",
    switchOn: true,
  },
  {
    id: "doc-6",
    index: "6",
    name: "海外储能市场分析.pdf",
    format: "PDF",
    slices: "28",
    status: tag("处理完成", "success"),
    statusText: "处理完成",
    labels: chips(["储能", "市场"]),
    createdAt: "2025-09-09 22:00:00",
    canBatch: true,
    ops: "done",
    switchOn: true,
  },
  {
    id: "doc-7",
    index: "7",
    name: "动力电池材料综述.pdf",
    format: "PDF",
    slices: "0",
    status: tag("处理失败", "danger"),
    statusText: "处理失败",
    labels: "-",
    createdAt: "2025-09-09 22:00:00",
    canBatch: true,
    ops: "failed",
    switchOn: false,
  },
  {
    id: "doc-8",
    index: "8",
    name: "2026储能项目经营数据表.xlsx",
    format: "XLSX",
    slices: "18",
    status: tag("处理完成", "success"),
    statusText: "处理完成",
    labels: chips(["Excel", "经营数据"]),
    createdAt: "2026-05-26 15:20:00",
    canBatch: true,
    ops: "done",
    switchOn: true,
  },
  {
    id: "doc-9",
    index: "9",
    name: "储能产品路演材料.pptx",
    format: "PPTX",
    slices: "12",
    status: tag("处理完成", "success"),
    statusText: "处理完成",
    labels: chips(["PPT", "路演"]),
    createdAt: "2026-05-26 15:24:00",
    canBatch: true,
    ops: "done",
    switchOn: true,
  },
];

const SUPPORTED_DOC_FORMATS = [
  { format: "PDF", tone: "pdf" },
  { format: "DOCX", tone: "docx" },
  { format: "DOC", tone: "doc" },
  { format: "XLSX", tone: "xlsx" },
  { format: "XLS", tone: "xls" },
  { format: "CSV", tone: "xlsx" },
  { format: "MD", tone: "md" },
  { format: "PPTX", tone: "ppt" },
  { format: "PPT", tone: "ppt" },
  { format: "TXT", tone: "txt" },
  { format: "HTML", tone: "html" },
  { format: "HTM", tone: "html" },
];

const FRONT_NAV = [
  { id: "chat", label: "新建任务", icon: "addSquare" },
  { id: "experts", label: "专家", icon: "evaluate" },
  { id: "automation", label: "自动化", icon: "filterCalendar" },
  { id: "files", label: "文件库", icon: "treeFile" },
];

const FRONT_HISTORY = [
  { id: "weekly", title: "帮我整理本周项目进度", time: "刚刚", dot: "green", type: "Agent" },
  { id: "contract", title: "合同审核风险点分析", time: "5小时", dot: "", type: "Plan" },
  { id: "prd", title: "生成产品需求文档初稿", time: "20小时", dot: "red", type: "Agent" },
  { id: "weekly-1", title: "帮我整理本周项目进度", time: "1天", dot: "", type: "Agent" },
  { id: "contract-1", title: "合同审核风险点分析", time: "1天", dot: "", type: "Plan" },
  { id: "prd-1", title: "生成产品需求文档初稿", time: "2天", dot: "", type: "Agent" },
  { id: "weekly-2", title: "帮我整理本周项目进度", time: "2天", dot: "", type: "Agent" },
  { id: "contract-2", title: "合同审核风险点分析", time: "3天", dot: "", type: "Plan" },
  { id: "prd-2", title: "生成产品需求文档初稿", time: "4天", dot: "", type: "Agent" },
  { id: "weekly-3", title: "帮我整理本周项目进度", time: "1周", dot: "", type: "Agent" },
  { id: "contract-3", title: "合同审核风险点分析", time: "2周", dot: "", type: "Plan" },
  { id: "prd-3", title: "生成产品需求文档初稿", time: "1个月", dot: "", type: "Agent" },
];

const FRONT_HISTORY_FULL = [
  { id: "sort", title: "如何实现快速排序算法？", type: "Agent", group: "今天", time: "2小时前" },
  { id: "weather", title: "今日北京天气如何？", type: "Agent", group: "今天", time: "4小时前" },
  { id: "india", title: "印度天气如何，适合去旅游吗？", type: "Plan", group: "今天", time: "6小时前" },
  { id: "india-long", title: "印度天气如何，适合去旅游吗？印度天气如何，适合去旅游吗？印度天气如何，适合去旅游吗？", type: "Plan", group: "今天", time: "8小时前" },
  { id: "sort-y1", title: "如何实现快速排序算法？", type: "快速审核专家", group: "昨天", time: "15:00" },
  { id: "sort-y2", title: "如何实现快速排序算法？", type: "快速审核专家", group: "昨天", time: "09:00" },
  { id: "sort-old1", title: "如何实现快速排序算法？", type: "编程助手", group: "更早", time: "2025-12-02 20:00" },
  { id: "sort-old2", title: "如何实现快速排序算法？", type: "编程助手", group: "更早", time: "2025-12-02 18:00" },
];

const FRONT_EXPERTS = [
  { id: "service", name: "客户服务助手", desc: "专注高效响应咨询、解决需求，提供贴心便捷的一对一服务。", category: "运营", tag: "自主规划" },
  { id: "legal", name: "合同审核专家", desc: "识别合同条款风险，输出清晰的修订建议与审核摘要。", category: "法务", tag: "自主规划" },
  { id: "pm", name: "产品需求专家", desc: "将业务想法拆成结构化 PRD、验收标准和迭代计划。", category: "项目", tag: "自主规划" },
  { id: "analysis", name: "经营分析助手", desc: "整合经营数据，生成指标洞察、趋势判断和行动建议。", category: "分析", tag: "自主规划" },
  { id: "ops", name: "运营复盘助手", desc: "辅助活动复盘、用户反馈归因和下一步运营策略制定。", category: "运营", tag: "自主规划" },
];

const FRONT_SKILLS = [
  "技能名称",
  "微信公众号运营解决解决方案",
  "技能名称技能名称",
  "合同审核风险点提取",
  "项目周报生成",
];

const FRONT_AUTOMATIONS = [
  { id: "risk", title: "每日合同风险巡检", status: "成功", enabled: true },
  { id: "brief", title: "每日经营简报", status: "", enabled: true },
  { id: "mail", title: "重要邮件摘要", status: "", enabled: true },
  { id: "off", title: "周报材料归档", status: "", enabled: false },
];

const FRONT_TASK_FILES = [
  { id: "word", name: "特斯拉25年Q4财报", fileName: "tesla_q4_2025_analysis.docx", time: "今天 20:00", type: "wordFile", tone: "word", format: "DOCX" },
  { id: "md", name: "特斯拉25年Q4财报", fileName: "tesla_q4_2025_analysis.md", time: "今天 20:00", type: "mdFile", tone: "md", format: "MD" },
  { id: "ppt", name: "Agents.pptx", fileName: "Agents.pptx", time: "今天 20:00", type: "pptFile", tone: "ppt", format: "PPTX" },
  { id: "xls", name: "Agents.xls", fileName: "Agents.xls", time: "今天 20:00", type: "excelFile", tone: "excel", format: "XLSX" },
  { id: "word2", name: "Agents.word", fileName: "Agents.word", time: "昨天 20:00", type: "wordFile", tone: "word", format: "DOCX" },
  { id: "ppt2", name: "Agents.pptx", fileName: "Agents.pptx", time: "2026-06-14 20:00:00", type: "pptFile", tone: "ppt", format: "PPTX" },
  { id: "xls2", name: "Agents.xls", fileName: "Agents.xls", time: "2026-06-14 20:00:00", type: "excelFile", tone: "excel", format: "XLSX" },
];

const FRONT_FILE_GROUPS = [
  { title: "帮我整理本周项目进度", meta: "今天 20:00 · 共 3 个文件", files: ["word2", "ppt", "xls"] },
  { title: "合同审核风险点分析", meta: "收起 · 昨天 20:00 · 共 5 个文件", files: ["word2", "ppt", "xls", "ppt2", "xls2"] },
  { title: "生成产品需求文档初稿", meta: "展开更多 · 2026-06-14 20:00:00 · 共 70 个文件", files: ["word2", "ppt", "xls", "ppt2", "xls2"] },
];

const FRONT_SUGGESTIONS = [
  "继续补充关键财务指标",
  "把结论整理成汇报提纲",
  "生成可下载的 Word 文档",
];

const pages = {
  "/front/chat": {
    kind: "frontChat",
    title: "前台对话",
    breadcrumb: ["前台对话"],
  },
  "/analytics": {
    kind: "home",
    title: "首页",
    breadcrumb: ["首页"],
    orbit: ["参数设置", "工作流", "模型管理", "评测", "图谱管理", "用户管理", "智能体管理", "知识库"],
  },
  "/dashboard/robotList": {
    kind: "table",
    title: "智能体管理",
    breadcrumb: ["智能体", "智能体管理"],
    pills: ["智能体中心", "我的智能体"],
    views: {
      "智能体中心": {
        filters: [field("请输入智能体名称"), selectField("请选择智能体类型"), dateField("创建开始日期", "创建结束日期"), button("重 置", "reset")],
        columns: [
          ["序号", "56px"],
          ["名称", "178px"],
          ["类型", "88px"],
          ["简介", "1fr"],
          ["创建人", "96px"],
          ["所属部门", "112px"],
          ["分享时间", "154px"],
          ["操作", "96px"],
        ],
        rows: [
          ["1", "长客思维导图", tag("自主规划", "primary"), "长客思维导图识别", "王一雄", "研发部门", "2026-04-23 10:19:26", actions(["查看", "复用"])],
          ["2", "翻译助手演示", tag("自主规划", "primary"), "支持中文、英语、日语、韩语、法语、德语、西班牙语、俄语、阿拉伯语等主流语言任意互译。", "刘颖", "研发部门", "2026-04-20 13:22:37", actions(["查看", "复用"])],
          ["3", "test", tag("自主规划", "primary"), "aaa", "刁乃儒", "研发部门", "2026-04-20 11:10:29", actions(["查看", "复用"])],
          ["4", "分享测试", tag("自主规划", "primary"), "分享测试", "孙嘉琦", "研发部门", "2026-04-16 20:34:45", actions(["查看", "复用"])],
          ["5", "通用rag测评-默认", tag("RAG", "warning"), "通用rag测评-默认", "王一雄", "研发部门", "2026-04-16 18:07:34", actions(["查看", "复用"])],
          ["6", "通用rag测评", tag("RAG", "warning"), "通用rag测评", "王一雄", "研发部门", "2026-04-16 15:35:31", actions(["查看", "复用"])],
          ["7", "新能源电动车智能体", tag("RAG", "warning"), "聚焦新能源电动车行业的智能问答助手，支持行业知识检索、政策趋势分析与场景化问答。", "信通院", "客户试用部门", "2026-04-14 15:10:05", actions(["查看", "复用"])],
          ["8", "提示词设计助手演示", tag("RAG", "warning"), "输入你想写的提示词主题，我会帮你生成优质的提示词", "刘颖", "研发部门", "2026-04-14 12:06:13", actions(["查看", "复用"])],
          ["9", "基础法律问答", tag("RAG", "warning"), "围绕合同、劳动、人身损害等基础法律问题提供标准化应答。", "杨文逸", "研发管理部", "2026-04-14 10:42:51", actions(["查看", "复用"])],
          ["10", "商品市场趋势预测", tag("自主规划", "primary"), "面向消费品市场的趋势预测与情报分析助手。", "杨文逸", "研发管理部", "2026-04-14 10:31:22", actions(["查看", "复用"])],
        ],
        pagination: pager("43", "10条/页", [1, 2, 3, 4, 5]),
      },
      "我的智能体": {
        filters: [field("请输入智能体名称"), selectField("请选择智能体类型"), dateField("创建开始日期", "创建结束日期"), button("重 置", "reset")],
        actionButtons: [button("新增智能体", "open", "primary")],
        columns: [
          ["序号", "56px"],
          ["名称", "176px"],
          ["类型", "88px"],
          ["简介", "1fr"],
          ["创建人", "96px"],
          ["所属部门", "112px"],
          ["创建时间", "154px"],
          ["状态", "164px"],
          ["操作", "120px"],
        ],
        rows: [
          ["1", "石油化工小助手", tag("RAG", "warning"), "石油化工知识问答", "杨文逸", "研发管理部", "2026-04-13 15:37:18", chips([{ text: "商店" }, { text: "未发布H5" }, { text: "共享" }, { text: "API" }, { text: "MCP" }]), actions(["编辑", { label: "发布", dropdown: true }, "删除"])],
          ["2", "商品市场趋势预测", tag("自主规划", "primary"), "聚焦各类商品市场行情分析，依托数据模型挖掘市场规律、研判价格走势与需求变化，精准预测行业发展趋势，为商品采购、销售、库存管理提供数据化决策参考，助力把握市场机遇、规避经营风险。", "杨文逸", "研发管理部", "2026-04-10 19:06:31", chips([{ text: "商店" }, { text: "未发布H5" }, { text: "共享" }, { text: "API" }, { text: "MCP" }]), actions(["编辑", { label: "发布", dropdown: true }, "删除"])],
          ["3", "合同信息抽取", tag("自主规划", "primary"), "精准提取并结构化输出，大幅提升合同审核、归档效率！", "杨文逸", "研发管理部", "2026-04-10 19:02:41", chips([{ text: "商店" }, { text: "未发布H5" }, { text: "共享" }, { text: "API" }, { text: "MCP" }]), actions(["编辑", { label: "发布", dropdown: true }, "删除"])],
          ["4", "网页链接文章转写", tag("自主规划", "primary"), "欢迎使用网页文章转写助手，我将为您高效解析网页并重写内容！", "杨文逸", "研发管理部", "2026-04-10 18:35:17", chips([{ text: "商店" }, { text: "未发布H5" }, { text: "共享" }, { text: "API" }, { text: "MCP" }]), actions(["编辑", { label: "发布", dropdown: true }, "删除"])],
          ["5", "汽车专家", tag("自主规划", "primary"), "专业汽车咨询助手，可解答车型对比、购车建议、配置解析、用车保养、故障判断、新能源与燃油车选择等问题，帮你理性选车、用车。", "杨文逸", "研发管理部", "2026-04-10 18:25:20", chips([{ text: "商店" }, { text: "未发布H5" }, { text: "共享" }, { text: "API" }, { text: "MCP" }]), actions(["编辑", { label: "发布", dropdown: true }, "删除"])],
          ["6", "金融市场策略分析", tag("自主规划", "primary"), "深耕股票、黄金等市场，依托专业模型解析行情走势与市场逻辑，输出针对性交易策略，涵盖仓位配置、买卖信号及风险把控，为多元资产投资提供理性分析与决策参考。", "杨文逸", "研发管理部", "2026-04-10 18:16:41", chips([{ text: "商店" }, { text: "未发布H5" }, { text: "共享" }, { text: "API" }, { text: "MCP" }]), actions(["编辑", { label: "发布", dropdown: true }, "删除"])],
          ["7", "12306票务查询", tag("自主规划", "primary"), "12306 票务查询智能体，可快速查询列车时刻、余票、票价，提供购票、候补、改签、退票等实用指引，解答铁路出行票务相关问题，帮你便捷规划铁路行程。", "杨文逸", "研发管理部", "2026-04-10 16:30:35", chips([{ text: "商店" }, { text: "未发布H5" }, { text: "共享" }, { text: "API" }, { text: "MCP" }]), actions(["编辑", { label: "发布", dropdown: true }, "删除"])],
          ["8", "情感大师", tag("自主规划", "primary"), "我是情感大师", "杨文逸", "研发管理部", "2026-03-09 20:32:21", chips([{ text: "商店" }, { text: "未发布H5" }, { text: "共享" }, { text: "API" }, { text: "MCP" }]), actions(["编辑", { label: "发布", dropdown: true }, "删除"])],
          ["9", "论文帮手", tag("自主规划", "primary"), "提供方向与关键词，我能为你推荐相关论文、提供论文的框架模板，并根据推荐的论文撰写综述。", "杨文逸", "研发管理部", "2026-03-06 12:42:19", chips([{ text: "商店" }, { text: "未发布H5" }, { text: "共享" }, { text: "API" }, { text: "MCP" }]), actions(["编辑", { label: "发布", dropdown: true }, "删除"])],
          ["10", "设备", tag("自主规划", "primary"), "设备识别", "杨文逸", "研发管理部", "2026-03-04 14:55:38", chips([{ text: "商店" }, { text: "未发布H5" }, { text: "共享" }, { text: "API" }, { text: "MCP" }]), actions(["编辑", { label: "发布", dropdown: true }, "删除"])],
        ],
        pagination: pager("19", "10条/页", [1, 2]),
      },
    },
  },
  "/dashboard/data-center": {
    kind: "table",
    title: "数据中心",
    breadcrumb: ["智能体", "数据中心"],
    pills: ["对话记录", "用户反馈", "点赞点踩"],
    views: {
      对话记录: {
        filters: [field("请输入问题名称"), selectField("请选择智能体"), dateField("创建开始日期", "创建结束日期"), button("重 置", "reset"), button("删 除", "disabled"), button("导 出", "open")],
        columns: [
          [checkbox(), "40px"],
          ["序号", "56px"],
          ["问题", "80px"],
          ["答案", "1fr"],
          ["图片", "64px"],
          ["创建时间", "156px"],
          ["所属智能体", "116px"],
          ["来源", "72px"],
          ["请求Token量", "100px"],
          ["返回Token量", "100px"],
          ["总计Token", "92px"],
          ["操作", "72px"],
        ],
        rows: [
          [checkbox(), "1", "D", "您的问题“D”表述不清，请您补充具体需求。目前提供的资料主要涉及上游板块主要公司的涨跌幅数据👉3👈。", "-", "2026-04-13 18:20:37", "石油化工小助手", "rag", "2680", "2197", "4877", actions(["删除"])],
          [checkbox(), "2", "B", "⚠ 发生未知错误: Error code: 429 - {'error': {'code': '1302', 'message': '您的账户已达到速率限制，请您控制请求频率'}}", "-", "2026-04-13 18:20:35", "石油化工小助手", "chatglm", "0", "0", "0", actions(["删除"])],
          [checkbox(), "3", "D", "您的问题“D”表述不清晰，无法理解您的具体需求。请您补充说明您想查询的具体内容（例如：某家公司的涨跌幅数据、特定板块信息等），以便我为您提供准确的解答。", "-", "2026-04-13 18:20:16", "石油化工小助手", "rag", "2680", "1911", "4591", actions(["删除"])],
          [checkbox(), "4", "D", "您的问题“D”表述不够清晰，无法确定您的具体需求。请您补充说明您想了解的内容，例如是查询某只特定股票的涨跌幅、某个公司的信息，还是其他相关问题。", "-", "2026-04-13 18:19:15", "石油化工小助手", "rag", "2680", "1043", "3723", actions(["删除"])],
          [checkbox(), "5", "D", "问题不明确，请提供进一步的说明。", "-", "2026-04-13 18:19:09", "石油化工小助手", "chatglm", "105", "601", "706", actions(["删除"])],
          [checkbox(), "6", "C", "您的问题“C”不够明确，我无法理解您的具体需求。请您补充完整的问题，或者详细描述您想了解的内容（例如：具体的规章制度条款、流程或针对上述引用数据的疑问），我将为您提供专业的解答。", "-", "2026-04-13 18:18:25", "石油化工小助手", "rag", "2200", "1686", "3886", actions(["删除"])],
          [checkbox(), "7", "C", "您的问题“C”表述不清晰，无法确定您具体想查询的内容。提供的参考信息主要包含上游板块主要公司的涨跌幅数据👉1👈，未发现与“C”直接相关的明确信息。请您补充具体问题，以便我为您提供准确的解答。", "-", "2026-04-13 18:18:11", "石油化工小助手", "rag", "2200", "1220", "3420", actions(["删除"])],
          [checkbox(), "8", "D", "⚠ 发生未知错误: Error code: 429 - {'error': {'code': '1302', 'message': '您的账户已达到速率限制，请您控制请求频率'}}", "-", "2026-04-13 18:18:04", "石油化工小助手", "rag", "0", "0", "0", actions(["删除"])],
          [checkbox(), "9", "A", "您好，您的问题“A”表述不清晰，请您补充具体的问题内容，以便我为您提供准确的解答。", "-", "2026-04-13 18:17:43", "石油化工小助手", "rag", "3665", "1465", "5130", actions(["删除"])],
          [checkbox(), "10", "C", "⚠ 发生未知错误: Error code: 429 - {'error': {'code': '1302', 'message': '您的账户已达到速率限制，请您控制请求频率'}}", "-", "2026-04-13 18:17:35", "石油化工小助手", "rag", "0", "0", "0", actions(["删除"])],
        ],
        pagination: pager("271", "10条/页", [1, 2, 3, 4, 5]),
      },
      用户反馈: {
        filters: [field("请输入反馈内容"), selectField("请选择智能体"), dateField("创建开始日期", "创建结束日期"), button("重 置", "reset"), button("删 除", "disabled"), button("导 出", "open")],
        columns: [[checkbox(), "40px"], ["序号", "56px"], ["问题", "120px"], ["反馈内容", "1fr"], ["创建时间", "156px"], ["所属智能体", "116px"], ["反馈类型", "88px"], ["操作", "72px"]],
        rows: [],
        pagination: pager("0", "10条/页", [1]),
      },
      点赞点踩: {
        filters: [field("请输入问题名称"), selectField("请选择智能体"), dateField("创建开始日期", "创建结束日期"), button("重 置", "reset"), button("删 除", "disabled"), button("导 出", "open")],
        columns: [[checkbox(), "40px"], ["序号", "56px"], ["问题", "120px"], ["答案", "1fr"], ["评价", "80px"], ["创建时间", "156px"], ["所属智能体", "116px"], ["操作", "72px"]],
        rows: [],
        pagination: pager("0", "10条/页", [1]),
      },
    },
  },
  "/manage/management": {
    kind: "splitTable",
    title: "文档管理",
    breadcrumb: ["知识库", "文档管理"],
    sideSearch: "搜索知识库",
    sideItems: ["新能源汽车", "中国菜系图谱", "基础法律问答", "新能源知识", "石油传统行业知识库", "法律文库", "法律课堂", "石油化工行业知识库"],
    sideActive: "中国菜系图谱",
    headerText: "当前分组：中国菜系图谱",
    headerButtons: [button("召回测试", "open"), button("接口调用", "open", "primary")],
    filters: [
      field("请输入文档名称"),
      selectField("请选择文档格式"),
      selectField("请选择状态"),
      dateField("创建开始日期", "创建结束日期"),
      button("重 置", "reset"),
      button("删 除", "disabled"),
      button("上传文档", "open", "primary"),
    ],
    columns: [
      [checkbox(), "42px"],
      ["编号", "60px"],
      ["文档名称", "240px"],
      ["切片数", "80px"],
      ["创建时间", "150px"],
      ["状态", "110px"],
      ["标签", "100px"],
      ["操作", "96px"],
    ],
    rows: [
      [checkbox(), "1", "中国菜系种类.docx", "1", "2026-04-13 15:20:32", tag("处理完成", "success"), tag("添加标签", "primary"), actions(["详情", "删除"])],
      [checkbox(), "2", "shipu(1).docx", "1", "2026-04-13 15:20:32", tag("处理完成", "success"), tag("添加标签", "primary"), actions(["详情", "删除"])],
    ],
    pagination: pager("2", "10条/页", [1]),
  },
  "/manage/faq": {
    kind: "splitTable",
    title: "FAQ管理",
    breadcrumb: ["知识库", "FAQ管理"],
    sideSearch: "请输入关键词搜索",
    sideItems: ["中国房价市场", "新能源行业", "石油传统能源行业", "新能源FAQ库"],
    sideActive: "中国房价市场",
    filters: [
      field("请输入问题名称"),
      selectField("请选择审核状态"),
      dateField("创建开始日期", "创建结束日期"),
      button("重 置", "reset"),
      button("删 除", "disabled"),
      button("批量上传", "open"),
      button("下载模板", "open"),
      button("新增问答", "open", "primary"),
    ],
    columns: [
      [checkbox(), "42px"],
      ["序号", "60px"],
      ["问题名称", "220px"],
      ["答案", "1fr"],
      ["来源", "70px"],
      ["创建时间", "150px"],
      ["操作", "90px"],
    ],
    rows: [
      [checkbox(), "1", "什么是土地出让金？", "土地出让金是政府将土地使用权出让给土地使用者，按规定向受让人收取的价款。", "上传", "2026-04-16 14:01:04", actions(["编辑", "删除"])],
      [checkbox(), "2", "什么是商品房预售？", "商品房预售是房地产开发企业将正在建设中的房屋预先出售给购买人，并由购买人支付定金或房价款的行为。", "上传", "2026-04-16 14:01:04", actions(["编辑", "删除"])],
      [checkbox(), "3", "什么是二手房指导价？", "二手房指导价是相关部门发布的存量住房交易参考价格，用于引导市场预期。", "上传", "2026-04-16 14:01:04", actions(["编辑", "删除"])],
      [checkbox(), "4", "什么是房屋均价？", "房屋均价通常指某一时期内某区域所有成交房屋的平均单价。", "上传", "2026-04-16 14:01:04", actions(["编辑", "删除"])],
      [checkbox(), "5", "什么是房价收入比？", "房价收入比是住房总价与居民家庭年收入的比值。", "上传", "2026-04-16 14:01:04", actions(["编辑", "删除"])],
      [checkbox(), "6", "中国房价目前多少", "10000", "手动", "2026-04-13 15:57:16", actions(["编辑", "删除"])],
    ],
    pagination: pager("11", "20条/页", [1]),
  },
  "/manage/graphList": {
    kind: "table",
    title: "图谱管理",
    breadcrumb: ["知识库", "图谱管理"],
    filters: [field("请输入图谱名称"), button("重 置", "reset"), button("知识融合", "open"), button("创建图谱", "open", "primary")],
    columns: [
      ["编号", "60px"],
      ["图谱名称", "180px"],
      ["概念数量", "90px"],
      ["实体数量", "90px"],
      ["关系数量", "90px"],
      ["创建时间", "150px"],
      ["最后编辑", "150px"],
      ["状态", "90px"],
      ["操作", "150px"],
    ],
    rows: [
      ["1", "房价分析", "0", "0", "0", "2026-04-13 17:41:53", "2026-04-13 17:48:43", tag("构建失败", "danger"), actions(["分配权限", "查看", "更多"], [false, true, false])],
      ["2", "中国房价分析", "0", "0", "0", "2026-04-13 17:32:16", "2026-04-13 17:34:21", tag("构建失败", "danger"), actions(["分配权限", "查看", "更多"], [false, true, false])],
      ["3", "中国菜系图谱", "4", "16", "14", "2026-04-13 15:21:04", "2026-04-13 15:23:28", tag("构建成功", "success"), actions(["分配权限", "查看", "更多"])],
      ["4", "serve", "2", "2", "2", "2026-04-10 11:31:22", "2026-04-10 11:33:10", tag("构建成功", "success"), actions(["分配权限", "查看", "更多"])],
      ["5", "三国2", "0", "0", "0", "2026-04-08 16:23:31", "2026-04-08 16:27:31", tag("构建失败", "danger"), actions(["分配权限", "查看", "更多"], [false, true, false])],
      ["6", "三国1", "25", "116", "67", "2026-04-08 15:50:14", "2026-04-08 16:11:04", tag("构建成功", "success"), actions(["分配权限", "查看", "更多"])],
      ["7", "三国关系图", "17", "73", "67", "2026-04-08 11:43:21", "2026-04-08 13:02:18", tag("构建成功", "success"), actions(["分配权限", "查看", "更多"])],
    ],
    pagination: pager("7", "10条/页", [1]),
  },
  "/extension/workflow_list": {
    kind: "cards",
    title: "工作流",
    breadcrumb: ["工具", "工作流"],
    pills: ["工具中心", "我的工作流"],
    filters: [field("请输入名称"), field("请输入创建者"), button("重 置", "reset"), button("查 询", "open", "primary")],
    columns: 4,
    cards: [
      card("图片识别智能体", "基础设施部", "可以支持图片上传，针对图片内容进行识别获取", "超级管理员 创建于2026-04-18 12:58:54"),
      card("演示-副本", "研发部门", "演示", "欢迎进入万卷 创建于2026-04-15 16:27:04"),
      card("qyw-workflow-2", "研发部门", "qyw-workflow-2", "乔艺伟 创建于2026-04-10 10:36:13"),
      card("后端开发测试-0401-2013", "研发部门", "后端开发测试版本发布:2013", "张仕宗 创建于2026-04-01 20:10:22"),
    ],
    pagination: pager("4", "10条/页", [1]),
  },
  "/extension/skills": {
    kind: "cards",
    title: "技能",
    breadcrumb: ["工具", "技能"],
    pills: ["技能中心", "我的技能"],
    filters: [field("请输入名称搜索"), button("重 置", "reset")],
    columns: 5,
    cards: [
      skillCard("text-to-docs", "4 个智能体关联", "Pandoc Markdown 转文档生成技能，支持多格式导出。", "欢迎进入万卷 创建于 2026-03-17 19:42", ["文档生成", "Pandoc"]),
      skillCard("power-outage-managem...", "1 个智能体关联", "面向预安排停电管理场景，支持停电事件识别、分析、通知。", "张博 创建于 2026-04-23 17:08", ["停电监控", "预安排停电", "+1"]),
      skillCard("smart-data-query", "0 个智能体关联", "面向业务查询与分析的智能问数技能。", "zhangsongqing 创建于 2026-04-23 13:42", ["数据查询", "智能问数", "+1"]),
      skillCard("power-outage-analysi...", "0 个智能体关联", "停电分析辅助技能。", "张博 创建于 2026-04-23 11:25", ["停电分析"]),
      skillCard("power-outage-custome...", "0 个智能体关联", "面向客户通知与响应的停电处理技能。", "张博 创建于 2026-04-23 10:56", ["客户通知"]),
      skillCard("power-outage-delay-c...", "0 个智能体关联", "延迟复电场景的辅助判断技能。", "张博 创建于 2026-04-23 10:42", ["延迟复电"]),
      skillCard("power-outage-restore...", "0 个智能体关联", "停电恢复流程辅助。", "张博 创建于 2026-04-23 10:31", ["恢复"]),
      skillCard("power-outage-site-re...", "0 个智能体关联", "现场上报信息整合技能。", "张博 创建于 2026-04-23 10:12", ["现场上报"]),
      skillCard("power-outage-event-c...", "0 个智能体关联", "停电事件归类与处置建议。", "张博 创建于 2026-04-23 09:56", ["事件归类"]),
      skillCard("power-outage-execute", "0 个智能体关联", "停电执行单与流程推进辅助。", "张博 创建于 2026-04-23 09:42", ["执行单"]),
    ],
    pagination: pager("32", "10条/页", [1, 2, 3, 4]),
  },
  "/extension/mcp": {
    kind: "cards",
    title: "MCP",
    breadcrumb: ["工具", "MCP"],
    filters: [field("请输入名称搜索"), button("重 置", "reset"), button("添加MCP服务", "open", "primary")],
    columns: 5,
    cards: [
      toolCard("12306票务查询", "服务器提供一个简单的API接口，允许用户搜索12306的车票", "8 TOOLS INCLUDED", ["图表工具", "解析工具"]),
      toolCard("web-reader-mcp", "网页内容抓取，支持抓取任意网页的完整内容，包括文本、链接等。", "1 TOOLS INCLUDED", ["解析工具"]),
      toolCard("图谱查询", "图谱节点与关系查询服务。", "6 TOOLS INCLUDED", ["知识图谱"]),
      toolCard("贵金属价格查询", "贵金属价格查询能力。", "6 TOOLS INCLUDED", ["行情"]),
      toolCard("证券之星", "证券与行情查询能力。", "16 TOOLS INCLUDED", ["证券"]),
      toolCard("股票查询", "股票行情与相关指标查询。", "34 TOOLS INCLUDED", ["证券"]),
      toolCard("文件内容抽取", "抽取 PDF、Word、图片中的结构化内容。", "1 TOOLS INCLUDED", ["文档解析"]),
      toolCard("网页抓取", "常规网页抓取服务。", "2 TOOLS INCLUDED", ["解析工具"]),
      toolCard("AntV 可视化图表", "生成图表与可视化配置。", "25 TOOLS INCLUDED", ["图表工具"]),
      toolCard("节假日查询", "节假日与调休安排查询。", "2 TOOLS INCLUDED", ["生活服务"]),
    ],
    pagination: pager("10", "10条/页", [1]),
  },
  "/extension/APIplugin": {
    kind: "table",
    title: "API",
    breadcrumb: ["工具", "API"],
    filters: [field("请输入插件名称"), dateField("创建开始日期", "创建结束日期"), button("重 置", "reset"), button("添加API服务", "open", "primary")],
    columns: [
      ["序号", "60px"],
      ["插件名称", "180px"],
      ["插件说明", "1fr"],
      ["创建人", "110px"],
      ["创建时间", "150px"],
      ["操作", "90px"],
    ],
    rows: [
      ["1", "天气", "1", "欢迎进入万卷", "2026-04-15 15:38:51", actions(["编辑", "删除"])],
      ["2", "图谱2", "图片测试2", "zhanglinji", "2026-04-02 14:40:14", actions(["编辑", "删除"])],
      ["3", "page-agent", "", "songyuan", "2026-04-02 11:47:39", actions(["编辑", "删除"])],
      ["4", "图数据", "", "超级管理员", "2026-03-26 15:53:11", actions(["编辑", "删除"])],
      ["5", "万卷接口", "", "刁乃儒", "2026-03-23 20:10:53", actions(["编辑", "删除"])],
      ["6", "Tavily 智能搜索服务", "基于Bearer Token认证，支持自然语言查询，返回结构化搜索结果", "姚家升", "2026-03-20 15:15:01", actions(["编辑", "删除"])],
      ["7", "图谱-查询节点", "精确查找标签为 Device、属性 name 值为“球阀”的节点", "超级管理员", "2026-03-18 14:11:29", actions(["编辑", "删除"])],
      ["8", "查询关系节点", "查询图数据库节点", "超级管理员", "2026-03-18 13:52:18", actions(["编辑", "删除"])],
      ["9", "图数据库结构", "数据库结构", "超级管理员", "2026-03-18 11:40:05", actions(["编辑", "删除"])],
      ["10", "根据城市查询天气", "通过城市名称或城市ID查询天气预报情况", "许沛卿", "2026-03-11 14:10:12", actions(["编辑", "删除"])],
    ],
    pagination: pager("16", "10条/页", [1, 2]),
  },
  "/extension/modeltool": {
    kind: "table",
    title: "处理组件",
    breadcrumb: ["工具", "处理组件"],
    filters: [field("请输入组件名称"), selectField("请选择组件类型"), dateField("创建开始日期", "创建结束日期"), button("重 置", "reset"), button("创建组件", "open", "primary")],
    columns: [
      ["序号", "60px"],
      ["组件名称", "180px"],
      ["组件类型", "120px"],
      ["创建人", "90px"],
      ["状态", "90px"],
      ["创建时间", "150px"],
      ["操作", "90px"],
    ],
    rows: [
      ["1", "1", "文档解析", "巩娜", tag("未就绪", "danger"), "2026-04-13 14:38:23", actions(["编辑", "删除"])],
      ["2", "hh", "文档解析", "刘颖", tag("就绪", "success"), "2026-04-13 14:29:53", actions(["编辑", "删除"])],
      ["3", "内容召回测试", "内容召回组件", "郭超", tag("就绪", "success"), "2026-04-07 22:24:30", actions(["编辑", "删除"])],
      ["4", "法律文书处理", "综合处理组件", "欢迎进入万卷", tag("未就绪", "danger"), "2026-03-20 14:59:56", actions(["编辑", "删除"])],
      ["5", "段落切片器", "内容分段", "欢迎进入万卷", tag("未就绪", "danger"), "2026-03-20 14:57:47", actions(["编辑", "删除"])],
      ["6", "多模态图像理解", "图片解析", "龙虾", tag("就绪", "success"), "2026-03-12 17:16:10", actions(["编辑", "删除"])],
      ["7", "excel解析", "文档解析", "许沛卿", tag("就绪", "success"), "2026-03-11 11:11:00", actions(["编辑", "删除"])],
      ["8", "md解析", "文档解析", "陈雷蒙", tag("就绪", "success"), "2026-03-10 18:22:10", actions(["编辑", "删除"])],
      ["9", "test_csv", "文档解析", "林忠玮", tag("就绪", "success"), "2026-03-10 17:04:44", actions(["编辑", "删除"])],
      ["10", "csv解析", "文档解析", "林忠玮", tag("就绪", "success"), "2026-03-10 15:58:03", actions(["编辑", "删除"])],
    ],
    pagination: pager("22", "10条/页", [1, 2, 3]),
  },
  "/modelService/gorithmmodel": {
    kind: "cards",
    title: "模型管理",
    breadcrumb: ["模型", "模型管理"],
    filters: [field("请输入名称搜索"), selectField("请选择模型类型"), button("重 置", "reset"), button("接入模型", "open", "primary")],
    columns: 5,
    cards: [
      modelCard("GLM-5v-Turbo", "glm-5v-turbo", "视觉理解模型", "2026-04-20 17:02:50"),
      modelCard("GLM-5.1", "glm-5.1", "深度推理模型", "2026-04-14 10:54:53", "更适合 coding、agent 任务与复杂推理。"),
      modelCard("AI原点社区专用模型", "glm-4-flashx-250414", "语言模型", "2026-04-03 11:59:57", "GLM-4-Flash-250414", "参数量 9B"),
      modelCard("GLM-5-Turbo", "glm-5-turbo", "深度推理模型", "2026-03-18 23:32:29", "OpenClaw 任务体验更均衡。"),
      modelCard("qwen_8b", "qwen", "文本向量模型", "2026-03-18 20:48:56", "", "系统默认"),
      modelCard("智谱Embedding-3", "embedding-3", "文本向量模型", "2026-03-26 08:50:05"),
      modelCard("GLM-4", "GLM-4", "语言模型", "2026-04-13 16:22:07"),
      modelCard("GLM-4.7", "glm-4.7", "深度推理模型", "2026-04-20 16:20:07", "agentic coding 表现更强。"),
      modelCard("GLM-4-Plus", "glm-4-plus", "语言模型", "2026-04-13 15:13:08"),
      modelCard("GLM-4.7-flashx", "glm-4.7-flashx", "深度推理模型", "2026-04-20 16:44:31", "普惠模型，速度流畅。"),
    ],
    pagination: pager("16", "10条/页", [1, 2]),
  },
  "/evaluating/task": {
    kind: "table",
    title: "评测任务",
    breadcrumb: ["评测", "评测任务"],
    filters: [field("请输入名称或描述"), selectField("请选择状态"), button("重 置", "reset"), button("新增评测任务", "open", "primary")],
    columns: [
      ["名称", "160px"],
      ["评测对象类型", "100px"],
      ["评测对象", "140px"],
      ["关联评测集", "150px"],
      ["状态", "90px"],
      ["得分", "180px"],
      ["描述", "160px"],
      ["创建人", "90px"],
      ["开始时间", "150px"],
      ["结束时间", "150px"],
      ["操作", "110px"],
    ],
    rows: [
      ["qq", "智能体", "qq", "个税测试", tag("待执行", "warning"), chips(["个税1: --", "计算器: --"]), "", "wangchao", "", "", actions(["执行", "编辑"])],
      ["测试", "智能体", "测试", "个税测试", tag("待执行", "warning"), chips(["个税2: --"]), "", "孙嘉琦", "", "", actions(["执行", "编辑"])],
      ["个税4", "智能体", "个税计算专家", "个税测试", tag("进行中", "primary"), chips(["个税2: --"]), "测试", "欢迎进入万卷", "2026-04-15 13:49:38", "", actions(["终止", "编辑"])],
      ["个税3", "智能体", "个税计算专家", "个税测试", tag("进行中", "primary"), chips(["个税2: --"]), "测试", "欢迎进入万卷", "2026-04-14 16:53:47", "", actions(["终止", "编辑"])],
      ["新能源电动车智能体测试", "智能体", "新能源电动车智能体", "优化分析报告", tag("成功", "success"), chips(["优化分析报告: 0"]), "验证", "信通院", "2026-04-14 15:12:13", "2026-04-14 15:13:52", actions(["执行", "编辑"], [true, false])],
      ["石油化工小助手评测", "智能体", "石油化工小助手", "问答测试-ceval-100条", tag("进行中", "primary"), chips(["优化分析报告: --"]), "", "杨文逸", "2026-04-13 17:21:00", "", actions(["终止", "编辑"])],
      ["132131231323", "系统内置官方智能体", "132131231323", "问答测试-管网测试集评测集", tag("成功", "success"), chips(["安全评估器: 0.8"]), "对方是否", "徐超", "2026-01-29 18:31:20", "2026-01-29 18:35:42", actions(["执行", "编辑"], [true, false])],
      ["报告生成智能体1", "智能体", "报告生成智能体1", "问答测试-ceval-100条", tag("成功", "success"), chips(["RAG测试-正确性评估: 1"]), "", "兰宇", "2026-01-28 21:05:11", "2026-01-28 21:15:06", actions(["执行", "编辑"], [true, false])],
    ],
    pagination: pager("18", "20条/页", [1]),
  },
  "/evaluating/collect": {
    kind: "table",
    title: "评测集",
    breadcrumb: ["评测", "评测集"],
    filters: [field("请输入名称或描述"), button("重 置", "reset"), button("新增评测集", "open", "primary")],
    columns: [
      ["名称", "160px"],
      ["列名", "160px"],
      ["描述", "1fr"],
      ["数据项数量", "90px"],
      ["更新人", "90px"],
      ["更新时间", "150px"],
      ["创建人", "90px"],
      ["创建时间", "150px"],
      ["操作", "110px"],
    ],
    rows: [
      ["测试", "sss", "", "3", "超级管理员", "2026-04-16 15:09:58", "超级管理员", "2026-04-16 15:09:58", actions(["编辑", "导出", "删除"])],
      ["个税测试", "question，answer", "用于个税计算评测", "10", "欢迎进入万卷", "2026-04-14 16:33:46", "欢迎进入万卷", "2026-04-14 16:33:46", actions(["编辑", "导出", "删除"])],
      ["优化分析报告", "wen，answer", "", "1", "黄艳", "2026-03-11 21:58:54", "黄艳", "2026-03-11 21:58:54", actions(["编辑", "导出", "删除"])],
      ["问答测试-管网测试集评测集", "question，answer", "管网测试集", "600", "闫永曦", "2026-01-29 18:13:20", "闫永曦", "2026-01-28 17:40:55", actions(["编辑", "导出", "删除"])],
      ["RAG测试-金融评测集", "question，answer", "", "487", "闫永曦", "2026-01-27 21:15:05", "闫永曦", "2026-01-27 21:15:05", actions(["编辑", "导出", "删除"])],
      ["RAG测试-法律评测", "question，answer", "", "415", "闫永曦", "2026-01-27 21:12:27", "闫永曦", "2026-01-27 21:12:27", actions(["编辑", "导出", "删除"])],
      ["问答测试-ceval-100条", "Task，reference_output", "", "99", "闫永曦", "2026-01-27 19:16:10", "闫永曦", "2026-01-27 19:16:10", actions(["编辑", "导出", "删除"])],
    ],
    pagination: pager("7", "10条/页", [1]),
  },
  "/evaluating/evaluation": {
    kind: "table",
    title: "评估器",
    breadcrumb: ["评测", "评估器"],
    filters: [field("请输入名称或描述"), selectField("请选择类型"), button("重 置", "reset"), button("新增LLM评估器", "open", "primary"), button("新增Code评估器", "open", "primary")],
    columns: [
      ["名称", "200px"],
      ["类型", "90px"],
      ["描述", "1fr"],
      ["更新人", "110px"],
      ["更新时间", "150px"],
      ["创建人", "110px"],
      ["创建时间", "150px"],
      ["操作", "90px"],
    ],
    rows: [
      ["个税2", "LLM", "测试", "欢迎进入万卷", "2026-04-15 13:47:26", "欢迎进入万卷", "2026-04-14 16:46:43", actions(["编辑", "删除"])],
      ["个税1", "LLM", "测试", "欢迎进入万卷", "2026-04-14 16:40:46", "欢迎进入万卷", "2026-04-14 16:40:46", actions(["编辑", "删除"])],
      ["计算器", "Code", "", "黄艳", "2026-03-11 21:54:46", "黄艳", "2026-03-11 21:54:46", actions(["编辑", "删除"])],
      ["优化分析报告", "LLM", "", "黄艳", "2026-03-11 21:50:28", "黄艳", "2026-03-11 21:50:28", actions(["编辑", "删除"])],
      ["RAG测试-正确性评估", "LLM", "", "闫永曦", "2026-01-27 21:18:37", "闫永曦", "2026-01-27 21:18:37", actions(["编辑", "删除"])],
      ["安全评估器", "LLM", "", "超级管理员", "2026-01-27 20:50:18", "", "2026-01-27 19:22:03", actions(["编辑", "删除"])],
      ["code评估器", "Code", "", "闫永曦", "2026-01-27 19:15:36", "闫永曦", "2026-01-27 19:15:36", actions(["编辑", "删除"])],
    ],
    pagination: pager("7", "10条/页", [1]),
  },
  "/system/user": {
    kind: "systemUsers",
    title: "用户管理",
    breadcrumb: ["系统管理", "用户管理"],
  },
  "/system/role": genericSystemPage("角色管理", ["序号", "角色名称", "权限字符", "数据范围", "状态", "创建时间", "操作"], [
    ["1", "超级管理员", "admin", "全部数据权限", switcher(), "2026-01-21 21:49:54", actions(["编辑", "权限设置", "删除"])],
    ["2", "普通角色", "common", "本部门数据权限", switcher(), "2026-01-22 10:08:06", actions(["编辑", "权限设置", "删除"])],
    ["3", "测试角色", "test", "仅本人数据权限", switcher(), "2026-01-22 10:38:22", actions(["编辑", "权限设置", "删除"])],
  ], [field("请输入角色名称"), field("请输入权限字符"), button("重 置", "reset"), button("新增角色", "open", "primary")], "178"),
  "/system/menu": genericSystemPage("菜单管理", ["菜单名称", "权限标识", "路由地址", "组件路径", "状态", "创建时间", "操作"], [
    ["首页", "analytics:view", "/analytics", "views/homepage/index.vue", switcher(), "2026-01-21 21:49:54", actions(["编辑", "新增", "删除"])],
    ["智能体管理", "robot:list", "/dashboard/robotList", "views/dashboard/robot-list.vue", switcher(), "2026-01-22 09:16:31", actions(["编辑", "新增", "删除"])],
    ["文档管理", "manage:document", "/manage/management", "views/manage/management.vue", switcher(), "2026-01-22 09:17:48", actions(["编辑", "新增", "删除"])],
  ], [field("请输入菜单名称"), button("重 置", "reset"), button("新增菜单", "open", "primary")], "56"),
  "/system/dept": genericSystemPage("部门管理", ["序号", "部门名称", "负责人", "联系电话", "状态", "创建时间", "操作"], [
    ["1", "基础设施部", "超级管理员", "15888888888", switcher(), "2026-01-21 21:49:54", actions(["编辑", "新增", "删除"])],
    ["2", "研发管理部", "杨文逸", "", switcher(), "2026-01-22 09:37:26", actions(["编辑", "新增", "删除"])],
    ["3", "客户试用部门", "信通院", "", switcher(), "2026-01-22 09:48:12", actions(["编辑", "新增", "删除"])],
  ], [field("请输入部门名称"), button("重 置", "reset"), button("新增部门", "open", "primary")], "24"),
  "/system/dict": genericSystemPage("字典管理", ["序号", "字典名称", "字典类型", "状态", "备注", "创建时间", "操作"], [
    ["1", "用户性别", "sys_user_sex", switcher(), "用户性别列表", "2026-01-21 21:49:54", actions(["编辑", "数据", "删除"])],
    ["2", "通知类型", "sys_notice_type", switcher(), "通知类型列表", "2026-01-21 21:50:41", actions(["编辑", "数据", "删除"])],
    ["3", "岗位状态", "sys_job_status", switcher(), "岗位状态列表", "2026-01-22 09:14:10", actions(["编辑", "数据", "删除"])],
  ], [field("请输入字典名称"), field("请输入字典类型"), button("重 置", "reset"), button("新增字典", "open", "primary")], "14"),
  "/system/model-config": genericSystemPage("系统模型配置", ["配置名称", "模型编码", "关联模块", "更新时间", "操作"], [
    ["默认对话模型", "glm-5-turbo", "对话", "2026-04-20 16:44:31", actions(["编辑"])],
    ["默认向量模型", "embedding-3", "知识库", "2026-04-03 11:59:57", actions(["编辑"])],
    ["默认视觉模型", "glm-5v-turbo", "图片理解", "2026-04-20 17:02:50", actions(["编辑"])],
  ], [button("保存配置", "open", "primary")], "3"),
  "/system/parameter": genericSystemPage("参数设置", ["参数名称", "参数键名", "参数键值", "系统内置", "备注", "创建时间", "操作"], [
    ["主框架页-默认皮肤样式名称", "sys.index.skinName", "skin-blue", "是", "蓝色 skin 样式", "2026-01-21 21:49:54", actions(["编辑"])],
    ["用户管理-账号初始密码", "sys.user.initPassword", "123456", "是", "初始化密码 123456", "2026-01-21 21:50:21", actions(["编辑"])],
    ["登录页-系统名称", "sys.login.systemName", "万卷", "是", "登录页系统名", "2026-01-22 09:03:16", actions(["编辑"])],
  ], [field("请输入参数名称"), field("请输入参数键名"), button("重 置", "reset"), button("新增参数", "open", "primary")], "12"),
  "/system/monitor": {
    kind: "opsOverview",
    title: "数据监控",
    breadcrumb: ["系统管理", "数据监控"],
  },
};

function normalizePath(path) {
  return pages[path] ? path : "/analytics";
}

function field(placeholder) {
  return { kind: "field", id: createFilterId("field", placeholder), placeholder, width: 190 };
}

function selectField(label) {
  return { kind: "select", id: createFilterId("select", label), label, width: 190, options: selectOptions(label) };
}

function dateField(start, end) {
  return { kind: "date", id: createFilterId("date", `${start}-${end}`), start, end, width: 260 };
}

function button(label, intent, style = "", extra = {}) {
  return { kind: "button", label, intent, style, ...extra };
}

function tag(text, tone) {
  return { type: "tag", text, tone };
}

function actions(labels, disabled = []) {
  return { type: "actions", items: labels.map((item) => typeof item === "string" ? { label: item } : item), disabled };
}

function chips(items) {
  return { type: "chips", items };
}

function checkbox(extra = {}) {
  return { type: "checkbox", ...extra };
}

function switcher() {
  return { type: "switch" };
}

function card(title, subtitle, desc, foot) {
  return { type: "card", title, subtitle, desc, foot };
}

function skillCard(title, subtitle, desc, foot, tags) {
  return { type: "skill", title, subtitle, desc, foot, tags };
}

function toolCard(title, desc, toolCount, tags) {
  return { type: "tool", title, desc, toolCount, tags };
}

function modelCard(title, code, tagName, date, desc = "", extra = "") {
  return { type: "model", title, code, tagName, date, desc, extra };
}

function pager(total, size, nums) {
  return { total, size, nums };
}

function genericSystemPage(title, columns, rows, filters, total) {
  const widths = ["70px", "160px", "160px", "150px", "90px", "150px", "120px"];
  return {
    kind: "table",
    title,
    breadcrumb: ["系统管理", title],
    filters,
    columns: columns.map((item, index) => [item, widths[index] || "140px"]),
    rows,
    pagination: pager(total, "10条/页", [1, 2, 3, 4, 5]),
  };
}

function currentPage() {
  return pages[state.path] || pages["/analytics"];
}

function createFilterId(prefix, text) {
  return `${prefix}-${String(text).toLowerCase().replace(/[^a-z0-9\u4e00-\u9fa5]+/g, "-").replace(/^-+|-+$/g, "")}`;
}

function selectOptions(label) {
  if (label.includes("智能体类型")) return ["全部", "RAG", "自主规划", "多应用协同"];
  if (label.includes("文档格式")) return ["全部", "PDF", "Word", "Excel", "TXT", "Markdown"];
  if (label.includes("审核状态")) return ["全部", "待审核", "已通过", "已驳回"];
  if (label.includes("状态")) return ["全部", "排队中", "文件解析中", "文件增强中", "处理完成", "处理失败", "已发布", "未发布"];
  if (label.includes("模型类型")) return ["全部", "Embedding", "LLM", "Rerank", "Vision"];
  if (label.includes("类型")) return ["全部", "自主规划", "RAG", "工作流", "Code", "MCP"];
  if (label.includes("智能体")) return ["全部", "石油化工小助手", "商品市场趋势预测", "合同信息抽取", "网页链接文章转写"];
  return ["全部", "选项一", "选项二", "选项三"];
}

function currentScopeKey(path = state.path) {
  return `${path}:${state.pageViews[path] || ""}`;
}

function scopeFilters(scopeKey = currentScopeKey()) {
  if (!state.filterValues[scopeKey]) state.filterValues[scopeKey] = {};
  return state.filterValues[scopeKey];
}

function getFilterState(item, scopeKey = currentScopeKey()) {
  const scoped = scopeFilters(scopeKey);
  if (!(item.id in scoped)) {
    scoped[item.id] = item.kind === "date" ? { start: "", end: "" } : "";
  }
  return scoped[item.id];
}

function setFilterState(item, value, scopeKey = currentScopeKey()) {
  const scoped = scopeFilters(scopeKey);
  scoped[item.id] = value;
}

function clearScopeFilters(scopeKey = currentScopeKey()) {
  state.filterValues[scopeKey] = {};
}

function getDateRangeState(item, scopeKey = currentScopeKey()) {
  const value = getFilterState(item, scopeKey);
  if (!value || typeof value !== "object") {
    const next = { start: "", end: "", anchor: startOfMonthIso(todayIso()) };
    setFilterState(item, next, scopeKey);
    return next;
  }
  if (!value.anchor) {
    value.anchor = startOfMonthIso(value.start || todayIso());
  }
  return value;
}

function displayDateValue(item, scopeKey = currentScopeKey()) {
  const value = getDateRangeState(item, scopeKey);
  return {
    start: value.start || item.start,
    end: value.end || item.end,
    filled: Boolean(value.start || value.end),
  };
}

function todayIso() {
  return dateToIso(new Date());
}

function toDate(iso) {
  return new Date(`${iso}T00:00:00`);
}

function dateToIso(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function startOfMonthIso(iso) {
  const date = toDate(iso);
  date.setDate(1);
  return dateToIso(date);
}

function addMonthsIso(iso, delta) {
  const date = toDate(iso);
  date.setDate(1);
  date.setMonth(date.getMonth() + delta);
  return dateToIso(date);
}

function addDaysIso(iso, delta) {
  const date = toDate(iso);
  date.setDate(date.getDate() + delta);
  return dateToIso(date);
}

function formatMonthTitle(iso) {
  const date = toDate(iso);
  return `${date.getFullYear()}年 ${date.getMonth() + 1}月`;
}

function buildMonthCells(anchorIso) {
  const monthStart = toDate(anchorIso);
  const monthIndex = monthStart.getMonth();
  const offset = (monthStart.getDay() + 6) % 7;
  const gridStartIso = addDaysIso(anchorIso, -offset);
  return Array.from({ length: 42 }, (_, index) => {
    const iso = addDaysIso(gridStartIso, index);
    return {
      iso,
      label: String(toDate(iso).getDate()),
      inMonth: toDate(iso).getMonth() === monthIndex,
      isToday: iso === todayIso(),
    };
  });
}

function isDateInRange(iso, start, end) {
  if (!start || !end) return false;
  return iso >= start && iso <= end;
}

function renderCalendarMonth(anchorIso, item, scopeKey) {
  const value = getDateRangeState(item, scopeKey);
  const cells = buildMonthCells(anchorIso);
  return `
    <section class="calendar-month">
      <div class="calendar-title">${formatMonthTitle(anchorIso)}</div>
      <div class="calendar-weekdays">${["一", "二", "三", "四", "五", "六", "日"].map((label) => `<span>${label}</span>`).join("")}</div>
      <div class="calendar-grid">
        ${cells.map((cell) => {
          const isStart = value.start === cell.iso;
          const isEnd = value.end === cell.iso;
          const inRange = isDateInRange(cell.iso, value.start, value.end);
          const classes = [
            "calendar-day",
            cell.inMonth ? "" : "muted",
            cell.isToday ? "today" : "",
            inRange ? "in-range" : "",
            isStart ? "range-start" : "",
            isEnd ? "range-end" : "",
          ].filter(Boolean).join(" ");
          return `
            <button class="${classes}" data-handler="${registerHandler({ type: "pickDateValue", itemId: item.id, scopeKey, value: cell.iso })}">
              <span>${cell.label}</span>
            </button>
          `;
        }).join("")}
      </div>
    </section>
  `;
}

function routeMeta(path) {
  for (const item of menuItems) {
    if (item.path === path) return { parent: "", label: item.label };
    if (item.children) {
      const child = item.children.find((entry) => entry.path === path);
      if (child) return { parent: item.label, label: child.label };
    }
  }
  return { parent: "", label: "首页" };
}

function icon(name, className = "wj-icon", options = {}) {
  if (projectIconNames[name]) {
    const attrs = [
      `name="${projectIconNames[name]}"`,
      `class="${className}"`,
    ];
    if (!options.preserveColor) attrs.push(`color="currentColor"`);
    if (options.width) attrs.push(`width="${options.width}"`);
    if (options.height) attrs.push(`height="${options.height}"`);
    if (options.size) attrs.push(`size="${options.size}"`);
    if (!options.width && !options.height && !options.size) attrs.push(`size="1em"`);
    return `<iconpark-icon ${attrs.join(" ")}></iconpark-icon>`;
  }
  const markup = icons[name] || icons.file;
  if (markup.trim().startsWith("<svg")) {
    return markup.replace("<svg ", `<svg class="${className}" aria-hidden="true" `);
  }
  return `<svg class="${className}" viewBox="0 0 24 24" aria-hidden="true">${markup}</svg>`;
}

function registerHandler(meta) {
  const id = `h${++state.handlerSeed}`;
  state.handlers[id] = meta;
  return id;
}

function navigate(path) {
  const next = normalizePath(path);
  if (!state.tabs.includes(next)) state.tabs.push(next);
  if (next === "/dashboard/robotList") {
    state.pageViews[next] = "智能体中心";
  }
  state.filterMenuKey = "";
  state.filterControlKey = "";
  state.docManagement.configView = null;
  const meta = routeMeta(next);
  state.openGroups = new Set(meta.parent ? [meta.parent] : []);
  state.path = next;
  location.hash = next;
  render();
}

function closeTab(path) {
  if (path === "/analytics" && state.tabs.length === 1) return;
  state.tabs = state.tabs.filter((item) => item !== path);
  if (!state.tabs.includes("/analytics")) state.tabs.unshift("/analytics");
  if (state.path === path) state.path = state.tabs[state.tabs.length - 1] || "/analytics";
  location.hash = state.path;
  render();
}

function toggleGroup(label) {
  if (state.openGroups.has(label)) state.openGroups.delete(label);
  else state.openGroups.add(label);
  render();
}

function openDrawer(title, fields) {
  state.filterMenuKey = "";
  state.filterControlKey = "";
  state.drawer = { title, fields };
  render();
}

function closeDrawer() {
  state.filterMenuKey = "";
  state.filterControlKey = "";
  state.drawer = null;
  render();
}

function render() {
  const scrollState = captureScrollState();
  state.handlers = {};
  state.handlerSeed = 0;
  const page = currentPage();
  document.title = `${page.title} - 万卷`;
  if (page.kind === "frontChat") {
    app.innerHTML = renderFrontChatPage();
    portal.innerHTML = (state.drawer ? renderDrawer() : "") + (opsState._auditModal ? renderOpsAuditModal() : "") + (opsState._agentRoiModal ? renderAgentRoiModal() : "");
    requestAnimationFrame(() => restoreScrollState(scrollState));
    return;
  }
  app.innerHTML = `
    <div class="app-shell">
      ${renderSidebar()}
      ${renderTopbar(page)}
      ${renderTabbar()}
      <main class="main">${renderPage(page)}</main>
    </div>
  `;
  portal.innerHTML = (state.drawer ? renderDrawer() : "") + (opsState._auditModal ? renderOpsAuditModal() : "") + (opsState._agentRoiModal ? renderAgentRoiModal() : "");
  if (page.kind && page.kind.indexOf("ops") === 0) {
    requestAnimationFrame(renderOpsCharts);
  }
  requestAnimationFrame(() => {
    if (state.resetMainScroll) {
      const main = document.querySelector(".main");
      const tableWrap = document.querySelector(".table-wrap");
      if (main) {
        main.scrollTop = 0;
        main.scrollLeft = 0;
      }
      if (tableWrap) {
        tableWrap.scrollTop = 0;
        tableWrap.scrollLeft = 0;
      }
      state.resetMainScroll = false;
      return;
    }
    restoreScrollState(scrollState);
  });
}

function captureScrollState() {
  const main = document.querySelector(".main");
  const tableWrap = document.querySelector(".table-wrap");
  const frontConversation = document.querySelector(".front-conversation");
  return {
    mainTop: main ? main.scrollTop : 0,
    mainLeft: main ? main.scrollLeft : 0,
    tableTop: tableWrap ? tableWrap.scrollTop : 0,
    tableLeft: tableWrap ? tableWrap.scrollLeft : 0,
    frontTop: frontConversation ? frontConversation.scrollTop : 0,
    frontLeft: frontConversation ? frontConversation.scrollLeft : 0,
  };
}

function restoreScrollState(stateSnapshot) {
  if (!stateSnapshot) return;
  const main = document.querySelector(".main");
  const tableWrap = document.querySelector(".table-wrap");
  const frontConversation = document.querySelector(".front-conversation");
  if (main) {
    main.scrollTop = stateSnapshot.mainTop || 0;
    main.scrollLeft = stateSnapshot.mainLeft || 0;
  }
  if (tableWrap) {
    tableWrap.scrollTop = stateSnapshot.tableTop || 0;
    tableWrap.scrollLeft = stateSnapshot.tableLeft || 0;
  }
  if (frontConversation) {
    frontConversation.scrollTop = stateSnapshot.frontTop || 0;
    frontConversation.scrollLeft = stateSnapshot.frontLeft || 0;
  }
}

function renderSidebar() {
  return `
    <aside class="sidebar">
      <div class="brand">
        <div class="brand-logo">
          ${icon("logoFull", "brand-logo-full-icon", { width: "86px", height: "34px" })}
        </div>
      </div>
      <div class="menu">
        ${menuItems.map(renderMenuItem).join("")}
      </div>
    </aside>
  `;
}

function renderMenuItem(item) {
  if (!item.children) {
    const active = state.path === item.path ? "active" : "";
    return `
      <button class="menu-item ${active}" data-handler="${registerHandler({ type: "nav", path: item.path })}">
        <span class="menu-icon">${icon(item.icon)}</span>
        <span class="menu-label">${item.label}</span>
      </button>
    `;
  }
  const open = state.openGroups.has(item.label);
  return `
    <div class="menu-group ${open ? "open" : ""}">
      <button class="menu-group-head" data-handler="${registerHandler({ type: "group", label: item.label })}">
        <span class="menu-icon">${icon(item.icon)}</span>
        <span class="menu-label">${item.label}</span>
        <span class="menu-chevron">${icon("chevron")}</span>
      </button>
      <div class="submenu">
        ${item.children.map((child) => `
          <button class="submenu-item ${state.path === child.path ? "active" : ""}" data-handler="${registerHandler({ type: "nav", path: child.path })}">
            <span class="menu-label">${child.label}</span>
          </button>
        `).join("")}
      </div>
    </div>
  `;
}

function renderTopbar(page) {
  const breadcrumbItems = compactBreadcrumb(page.breadcrumb);
  const crumbs = breadcrumbItems.map((item, index) => {
    if (item === "...") return `<span class="breadcrumb-link">...</span>`;
    const label = index === 0 ? `${icon("home", "wj-icon tiny-icon")}<span>${item}</span>` : `<span>${item}</span>`;
    const isCurrent = index === breadcrumbItems.length - 1;
    return `<span class="${isCurrent ? "breadcrumb-current" : "breadcrumb-link"}">${label}</span>`;
  }).join(`<span class="breadcrumb-separator">/</span>`);
  return `
    <header class="topbar">
      <button class="collapse-btn" data-handler="${registerHandler({ type: "noop" })}">${icon("menu")}</button>
      <div class="breadcrumb">${crumbs}</div>
      <div class="topbar-spacer"></div>
      <div class="topbar-actions">
        <button class="front-btn" data-handler="${registerHandler({ type: "nav", path: "/front/chat" })}">
          ${icon("frontApp", "front-btn-icon")}
          <span>前台应用</span>
        </button>
        <button class="icon-btn fullscreen-btn" data-handler="${registerHandler({ type: "noop" })}">${icon("fullscreen")}</button>
        <span class="topbar-divider" aria-hidden="true"></span>
        <button class="user-pill" data-handler="${registerHandler({ type: "drawer", title: "账号信息", fields: userFields() })}" aria-label="账号信息">
          <span class="avatar">杨</span>
        </button>
      </div>
    </header>
  `;
}

function compactBreadcrumb(items) {
  if (items.length <= 5) return items;
  return [items[0], "...", ...items.slice(-3)];
}

function renderTabbar() {
  return `
    <div class="tabbar">
      <div class="tab-scroll">
        ${state.tabs.map((path) => {
          const label = pages[path]?.title || routeMeta(path).label;
          return `
            <div class="tab ${path === state.path ? "active" : ""}">
              <button class="tab-title" data-handler="${registerHandler({ type: "nav", path })}">${label}</button>
              <span class="tab-close" data-handler="${registerHandler({ type: "closeTab", path })}">${icon("close")}</span>
            </div>
          `;
        }).join("")}
      </div>
      <button class="icon-btn" data-handler="${registerHandler({ type: "noop" })}">${icon("chevron")}</button>
    </div>
  `;
}

// ==================== 运营监控模块 ====================
const OPS_HOURS = Array.from({ length: 24 }, (_, i) => `${String(i).padStart(2, "0")}时`);
const OPS_PALETTE = ["#4941E6", "#766BF2", "#23BF6B", "#F18019", "#EB4453", "#06B6D4"];
const OPS_RANGES = [
  { key: "today", label: "至今" },
  { key: "7d", label: "近 7 天" },
  { key: "14d", label: "近 14 天" },
  { key: "30d", label: "近 30 天" },
  { key: "custom", label: "自定义" },
];

// 专家类型（列表 / 标签用）
const OPS_AGENT_TYPES = ["通用专家", "数字员工专家", "RAG 专家", "自主规划专家", "专家团队", "定制专家"];
// 部门专家使用分布图的更细类型（定制专家拆为知识问答 / 深度写作 / PPT 创作三类）
const OPS_CHART_TYPES = ["通用专家", "数字员工专家", "RAG 专家", "自主规划专家", "专家团队", "知识问答定制专家", "深度写作定制专家", "PPT 创作定制专家"];

// 组织架构（仅用于按一级部门拆分对比，超级管理员默认看全集团）
const OPS_DEPT_TREE = [
  {
    label: "集团总公司",
    children: [
      { label: "集团领导" },
      { label: "数字智能部", children: ["基础设施部", "系统建设部", "数据平台部", "数智战略部"] },
      { label: "科技创新部", children: ["综合规划部", "研发管理部"] },
      { label: "生产运营部" },
      { label: "综合监督部" },
    ],
  },
];

// 各部门聚合指标（14 天基准；tokens 单位亿）
const OPS_DEPT_METRIC = {
  "集团总公司": { calls: 48260, users: 732, total: 1280, tokens: 68.4, success: 98.2, latency: 1.46 },
  "集团领导":   { calls: 1860,  users: 24,  total: 36,   tokens: 12.4, success: 99.0, latency: 1.30 },
  "数字智能部": { calls: 16420, users: 268, total: 420,  tokens: 26.8, success: 98.5, latency: 1.41 },
  "基础设施部": { calls: 4120,  users: 86,  total: 120,  tokens: 7.2,  success: 98.8, latency: 1.36 },
  "系统建设部": { calls: 4680,  users: 92,  total: 130,  tokens: 8.1,  success: 98.3, latency: 1.44 },
  "数据平台部": { calls: 5240,  users: 104, total: 140,  tokens: 8.6,  success: 98.6, latency: 1.39 },
  "数智战略部": { calls: 2380,  users: 58,  total: 80,   tokens: 2.9,  success: 98.1, latency: 1.52 },
  "科技创新部": { calls: 12680, users: 218, total: 360,  tokens: 18.2, success: 97.9, latency: 1.55 },
  "综合规划部": { calls: 6840,  users: 128, total: 200,  tokens: 9.8,  success: 98.0, latency: 1.48 },
  "研发管理部": { calls: 5840,  users: 110, total: 180,  tokens: 8.4,  success: 97.7, latency: 1.62 },
  "生产运营部": { calls: 9860,  users: 162, total: 280,  tokens: 7.6,  success: 97.4, latency: 1.68 },
  "综合监督部": { calls: 2440,  users: 60,  total: 96,   tokens: 3.4,  success: 98.9, latency: 1.34 },
};

// 各模型 Token 与单价（tokens 单位亿，price 单位 元/亿Token）
const OPS_MODELS = [
  { name: "GLM 4.7",             tokens: 14.2, price: 6800 },
  { name: "GLM 5.1",             tokens: 18.6, price: 8600 },
  { name: "GLM 5.2",             tokens: 12.8, price: 9200 },
  { name: "deepseek v3.1",       tokens: 9.4,  price: 7400 },
  { name: "deepseek v4 pro",     tokens: 7.6,  price: 11200 },
  { name: "doubao seed 2.0 pro", tokens: 5.8,  price: 8800 },
];
const OPS_TOTAL_TOKENS = OPS_MODELS.reduce((s, m) => s + m.tokens, 0);
const OPS_AVG_PRICE = OPS_MODELS.reduce((s, m) => s + m.tokens * m.price, 0) / OPS_TOTAL_TOKENS;
function opsCost(tokensBillion) { return Math.round(tokensBillion * OPS_AVG_PRICE); }
function opsModelCost(m) { return Math.round(m.tokens * m.price); }
function opsCostAxis(v) { return v >= 10000 ? (v / 10000).toFixed(1) + "万" : String(v); }

// 专家列表（覆盖 6 种类型；定制专家拆为知识问答 / 深度写作 / PPT 创作三条）
const OPS_AGENT_LIST = [
  { name: "通用知识问答",   type: "RAG 专家",        dept: "数字智能部", calls: 4820, users: 312, success: 98.7, latency: 1.38, tokens: 186.4, published: 38 },
  { name: "合同信息抽取",   type: "数字员工专家",     dept: "数字智能部", calls: 3210, users: 96,  success: 99.2, latency: 2.06, tokens: 142.7, published: 22 },
  { name: "财务报表分析",   type: "RAG 专家",        dept: "科技创新部", calls: 1980, users: 64,  success: 96.8, latency: 2.74, tokens: 121.5, published: 16 },
  { name: "翻译助手",       type: "自主规划专家",     dept: "科技创新部", calls: 2760, users: 184, success: 97.5, latency: 1.21, tokens: 98.3,  published: 28 },
  { name: "邮件起草助手",   type: "自主规划专家",     dept: "生产运营部", calls: 1640, users: 142, success: 98.1, latency: 1.16, tokens: 76.2,  published: 19 },
  { name: "代码评审助手",   type: "数字员工专家",     dept: "数字智能部", calls: 1290, users: 58,  success: 95.4, latency: 3.12, tokens: 134.8, published: 11 },
  { name: "新能源行业问答", type: "RAG 专家",        dept: "生产运营部", calls: 2240, users: 88,  success: 97.2, latency: 1.84, tokens: 102.6, published: 14 },
  { name: "通用专家",       type: "通用专家",         dept: "集团总公司", calls: 11500, users: 888, success: 98.6, latency: 1.12, tokens: 413.4, published: 1 },
  { name: "市场营销协同",   type: "专家团队",         dept: "生产运营部", calls: 1860, users: 72,  success: 96.6, latency: 2.48, tokens: 118.2, published: 7 },
  { name: "研发流程编排",   type: "专家团队",         dept: "科技创新部", calls: 1420, users: 54,  success: 95.9, latency: 2.92, tokens: 96.4,  published: 5 },
  { name: "数据分析专家",   type: "数字员工专家",     dept: "数字智能部", calls: 2080, users: 78,  success: 97.8, latency: 1.96, tokens: 110.4, published: 13 },
  { name: "知识问答",       type: "定制专家",         dept: "集团总公司", calls: 3680, users: 412, success: 98.1, latency: 1.42, tokens: 88.6,  published: 3 },
  { name: "深度写作",       type: "定制专家",         dept: "集团总公司", calls: 2140, users: 268, success: 97.4, latency: 1.78, tokens: 124.2, published: 3 },
  { name: "PPT 创作",       type: "定制专家",         dept: "集团总公司", calls: 1620, users: 204, success: 96.9, latency: 2.24, tokens: 96.8,  published: 3 },
];

const OPS_USER_LIST = [
  { user: "王一雄", dept: "数字智能部", calls: 286, tokens: 18.4, last: "2026-07-14 18:22" },
  { user: "刘颖",   dept: "数字智能部", calls: 214, tokens: 15.1, last: "2026-07-14 16:48" },
  { user: "刁乃儒", dept: "科技创新部", calls: 168, tokens: 11.7, last: "2026-07-14 14:05" },
  { user: "孙嘉琦", dept: "科技创新部", calls: 142, tokens: 9.8,  last: "2026-07-13 19:31" },
  { user: "陈思远", dept: "生产运营部", calls: 196, tokens: 13.2, last: "2026-07-14 17:12" },
  { user: "林晓彤", dept: "生产运营部", calls: 158, tokens: 10.6, last: "2026-07-14 15:40" },
  { user: "赵明轩", dept: "综合监督部", calls: 132, tokens: 8.9,  last: "2026-07-14 11:28" },
  { user: "周雨彤", dept: "集团领导",   calls: 118, tokens: 7.4,  last: "2026-07-14 10:55" },
  { user: "吴皓宇", dept: "数字智能部", calls: 86,  tokens: 5.2,  last: "2026-07-13 16:20" },
  { user: "郑可欣", dept: "科技创新部", calls: 104, tokens: 6.8,  last: "2026-07-13 15:02" },
  { user: "许知远", dept: "综合规划部", calls: 82,  tokens: 4.9,  last: "2026-07-13 14:26" },
  { user: "顾明哲", dept: "研发管理部", calls: 76,  tokens: 4.6,  last: "2026-07-13 13:18" },
  { user: "宋佳宁", dept: "生产运营部", calls: 71,  tokens: 4.2,  last: "2026-07-13 11:42" },
  { user: "叶清扬", dept: "数字智能部", calls: 68,  tokens: 3.9,  last: "2026-07-12 18:54" },
  { user: "唐雨欣", dept: "科技创新部", calls: 63,  tokens: 3.6,  last: "2026-07-12 17:31" },
  { user: "韩思齐", dept: "综合监督部", calls: 58,  tokens: 3.2,  last: "2026-07-12 16:09" },
  { user: "罗文博", dept: "集团领导",   calls: 52,  tokens: 2.9,  last: "2026-07-12 14:48" },
  { user: "沈星河", dept: "数字智能部", calls: 47,  tokens: 2.6,  last: "2026-07-12 10:36" },
  { user: "程若溪", dept: "研发管理部", calls: 43,  tokens: 2.3,  last: "2026-07-11 17:22" },
  { user: "陆子安", dept: "生产运营部", calls: 39,  tokens: 2.0,  last: "2026-07-11 15:47" },
];

// 应用运营概览：总览卡片（14 天基准；专家数为存量指标，不随统计周期缩放）
const OPS_APP_STAT = {
  publishedExperts: 128,   // 已上架专家总数（个）
  autoTasks: 8624,         // 自动化执行任务量（次）
  taskDoneRate: 96.8,      // 任务完成率（%）
  deltas: { experts: 3.2, autoTasks: 18.6, calls: 12.4, doneRate: 0.6, tokens: 9.8, cost: 11.2 }, // 较上周对比（%）
};

const opsState = {
  rangeKey: "today",
  customStart: "2026-07-01",
  customEnd: "2026-07-14",
  userStart: "",
  userEnd: "",
  userPage: 1,
  tab: "资源总览",
  _detailName: null,
  _detailTab: "chat",
  _detailPageChat: 1,
  _detailPageAuto: 1,
  agentQuery: "",
  _agentSort: { col: "tokens", dir: "desc" },
  _agentRoiSeed: 0,
  _agentRoiResults: {},        // name -> "78.3%" 手动计算过的 ROI
  _agentRoiModal: null,        // { name, manualTime, agentTime }
  _drillDept: null,
  _rankDept: null,
  _userDrillDept: null,
  _trendDim: "dept",
  _resDeptPage: 0,
  auditFilter: { time: "7d", operator: "", type: "all", result: "all" },
  auditApplied: { time: "7d", operator: "", type: "all", result: "all" },
  auditPage: 1,
  retentionDays: 365,
  _auditModal: "",
  _auditRange: {
    preset: "7d",             // today / 7d / 30d / 90d / 180d / custom
    start: "",                // ISO YYYY-MM-DD
    end: "",
    applyToExport: true,
  },
};
const opsCharts = new Map();

// ---- 组织树辅助（仅取一级部门用于对比图）----
function opsNormalizeChildren(node) {
  if (!node || !node.children) return [];
  return node.children.map((c) => (typeof c === "string" ? { label: c } : c));
}
function opsDeptNode(label, nodes) {
  nodes = nodes || OPS_DEPT_TREE;
  for (const n of nodes) {
    if (n.label === label) return n;
    const sub = opsDeptNode(label, opsNormalizeChildren(n));
    if (sub) return sub;
  }
  return null;
}
function opsDeptChildren(label) {
  const n = opsDeptNode(label);
  return n && n.children ? opsNormalizeChildren(n).map((c) => c.label) : [];
}
const OPS_TOP_DEPTS = opsDeptChildren("集团总公司");

// ---- 时间范围 ----
function opsRangeMeta() {
  return OPS_RANGES.find((r) => r.key === opsState.rangeKey) || OPS_RANGES[2];
}
function opsRangeMult() {
  const r = opsState.rangeKey;
  return r === "today" ? 0.12 : r === "7d" ? 0.55 : r === "30d" ? 2.0 : 1;
}
function opsNum(base) {
  return Math.round(base * opsRangeMult());
}
// 模拟世界的"今天"（与 opsPresetDates 保持一致）
const OPS_TODAY = new Date(2026, 6, 14);
function opsPresetDateRange() {
  const key = opsState.rangeKey;
  if (key === "today") return { start: OPS_TODAY, end: OPS_TODAY, kind: "hour" };
  const n = key === "7d" ? 7 : key === "30d" ? 30 : 14;
  const start = new Date(OPS_TODAY);
  start.setDate(start.getDate() - n + 1);
  return { start, end: OPS_TODAY, kind: "day" };
}
function opsTimeAxis() {
  if (opsState.rangeKey === "today") return { labels: OPS_HOURS, kind: "hour", interval: 1, labelKind: "hour" };
  let start, end;
  if (opsState.rangeKey === "custom") {
    // 优先用当前页面对应的日期输入（用户消耗用 userStart/userEnd，审计用 customStart/customEnd）
    const rawStart = opsState.userStart || opsState.customStart;
    const rawEnd = opsState.userEnd || opsState.customEnd;
    const s = new Date(rawStart);
    const e = new Date(rawEnd);
    if (isNaN(s.getTime()) || isNaN(e.getTime())) {
      start = new Date(OPS_TODAY);
      start.setDate(start.getDate() - 13);
      end = new Date(OPS_TODAY);
    } else {
      start = s; end = e;
    }
  } else {
    const r = opsPresetDateRange();
    start = r.start; end = r.end;
  }
  const labels = [];
  const diff = Math.round((end - start) / 86400000) + 1;
  for (let i = 0; i < diff; i++) {
    const d = new Date(start);
    d.setDate(d.getDate() + i);
    labels.push(`${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`);
  }
  return { labels, kind: "day", interval: opsLabelInterval(labels.length), labelKind: "day" };
}
// 根据数据点数量计算横轴标签间隔，避免密集重叠
function opsLabelInterval(n) {
  if (n <= 14) return 0;
  if (n <= 20) return 1;
  if (n <= 31) return 2;
  if (n <= 60) return Math.ceil(n / 15) - 1;
  return Math.ceil(n / 12) - 1;
}
function opsTrend(base, n, opts) {
  opts = opts || {};
  const arr = [];
  for (let i = 0; i < n; i++) {
    const grow = 0.78 + 0.42 * (n === 1 ? 1 : i / (n - 1));
    const wave = 1 + 0.08 * Math.sin(i / 1.7 + (opts.phase || 0));
    arr.push(Math.round(base * grow * wave * (opts.scale || 1)));
  }
  return arr;
}

// ---- 通用组件 ----
function opsHelp(text) {
  const q = '<svg class="wj-icon ops-help-icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M9.1 9.3a2.9 2.9 0 0 1 5.6 1c0 1.9-2.7 2.3-2.7 3.7" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><circle cx="12" cy="17.1" r="0.95" fill="currentColor"/></svg>';
  return `<span class="ops-help">${q}<span class="ops-tip">${text}</span></span>`;
}
function opsKpi(label, value, unit, tip) {
  return `
    <div class="ops-kpi">
      <div class="ops-kpi-label">${label}${opsHelp(tip)}</div>
      <div class="ops-kpi-value">${value}<span class="ops-kpi-unit">${unit}</span></div>
    </div>
  `;
}
// 带周同比的总览卡片（deltaPct 保留参数位；当前设计不在卡片内展示环比数字）
function opsKpiCard(label, value, unit, tip, deltaPct) {
  return `
    <div class="ops-kpi">
      <div class="ops-kpi-label">${label}${opsHelp(tip)}</div>
      <div class="ops-kpi-value">${value}<span class="ops-kpi-unit">${unit}</span></div>
    </div>
  `;
}
function opsPanel(title, body, extra, tip) {
  return `
    <section class="ops-panel">
      <div class="ops-panel-head">
        <div class="ops-panel-title">${title}${tip ? opsHelp(tip) : ""}</div>
        ${extra || ""}
      </div>
      <div class="ops-panel-body">${body}</div>
    </section>
  `;
}
function opsChartEl(key, h) {
  return `<div class="ops-chart" data-ops-chart="${key}" style="height:${h || 280}px"></div>`;
}
function opsTag(text, tone) {
  return `<span class="ops-tag ${tone || ""}">${text}</span>`;
}
function opsDetailPagination(pageKey, pageSize, rows) {
  const pageCount = Math.max(1, Math.ceil(rows.length / pageSize));
  const page = Math.min(pageCount, Math.max(1, pageKey));
  const pageButtons = Array.from({ length: pageCount }, (_, i) => i + 1).map((n) =>
    `<button class="${n === page ? "active" : ""}" data-handler="${registerHandler({ type: "opsDetailPage", tab: pageKey === "_detailPageChat" ? "chat" : "auto", page: n })}">${n}</button>`
  ).join("");
  return {
    html: `
      <div class="ops-user-pagination ops-detail-pagination">
        <span>共 ${rows.length} 条</span>
        <button data-handler="${registerHandler({ type: "opsDetailPage", tab: pageKey === "_detailPageChat" ? "chat" : "auto", page: page - 1 })}" ${page === 1 ? "disabled" : ""}>‹</button>
        ${pageButtons}
        <button data-handler="${registerHandler({ type: "opsDetailPage", tab: pageKey === "_detailPageChat" ? "chat" : "auto", page: page + 1 })}" ${page === pageCount ? "disabled" : ""}>›</button>
      </div>
    `,
    page,
    pageCount,
    rows: rows.slice((page - 1) * pageSize, page * pageSize),
  };
}
function opsLink(text, meta) {
  return `<button class="ops-link" data-handler="${registerHandler(meta)}">${text}</button>`;
}
function opsTable(headers, rows) {
  return `
    <div class="ops-table-wrap">
      <table class="ops-table">
        <thead><tr>${headers.map((h) => `<th>${h}</th>`).join("")}</tr></thead>
        <tbody>${rows.map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join("")}</tr>`).join("")}</tbody>
      </table>
    </div>
  `;
}
function opsRangeBar() {
  const pills = OPS_RANGES.map((r) =>
    `<button class="subtab ${r.key === opsState.rangeKey ? "active" : ""}" data-handler="${registerHandler({ type: "opsSetRange", range: r.key })}">${r.label}</button>`
  ).join("");
  const showCustom = opsState.rangeKey === "custom";
  const cd = showCustom ? opsPresetDates("14d") : null;
  const customInputs = showCustom ? `
    <div class="ops-date-range">
      <input type="date" class="ops-date-input" data-ops-date="start" value="${opsState.customStart || (cd && cd.start)}" />
      <span class="ops-date-sep">至</span>
      <input type="date" class="ops-date-input" data-ops-date="end" value="${opsState.customEnd || (cd && cd.end)}" />
      <button class="btn ops-date-btn" data-handler="${registerHandler({ type: "opsApplyCustomRange" })}">应用</button>
    </div>
  ` : "";
  return `<div class="ops-rangebar"><span class="ops-range-label">统计周期</span><div class="subtabs ops-pills">${pills}</div>${customInputs}</div>`;
}
function opsUserFilterBar(withAuditFilters) {
  const options = OPS_RANGES.map((r) => `<option value="${r.key}" ${r.key === opsState.rangeKey ? "selected" : ""}>${r.label}</option>`).join("");
  const f = opsState.auditFilter;
  const auditFields = withAuditFilters ? `
      <label class="ops-audit-filter-field operator">
        <input class="ops-audit-control" data-ops-audit-filter="operator" aria-label="操作人" placeholder="关键词搜索" value="${escapeHtml(f.operator)}" />
      </label>
      <label class="ops-audit-filter-field type">
        <select class="ops-audit-control" data-ops-audit-filter="type" aria-label="操作类型">
          ${opsAuditSelectOptions([["all", "操作类型"], ["登录登出", "登录登出"], ["账号与席位管理", "账号与席位管理"], ["系统配置变更", "系统配置变更"], ["资源变更", "知识库/智能体资源变更"], ["对话发起", "对话发起"], ["告警处理", "告警处理"], ["审计导出", "审计导出"]], f.type)}
        </select>
      </label>
      <label class="ops-audit-filter-field result">
        <select class="ops-audit-control" data-ops-audit-filter="result" aria-label="操作结果">
          ${opsAuditSelectOptions([["all", "操作结果"], ["成功", "成功"], ["失败", "失败"]], f.result)}
        </select>
      </label>
      <button class="btn res-reset ops-audit-reset" data-handler="${registerHandler({ type: "opsAuditReset" })}">重 置</button>` : `<button class="btn res-reset" data-handler="${registerHandler({ type: "opsUserResetRange" })}">重 置</button>`;
  return `
    <div class="res-filters ops-user-filters">
      <label class="res-select res-select-sm ops-user-period">
        <select aria-label="统计周期" data-ops-user-range>${options}</select>
        ${RES_ICONS.chevron}
      </label>
      <div class="res-select res-daterange ops-user-daterange">
        <input type="text" inputmode="numeric" aria-label="创建开始日期" placeholder="创建开始日期" value="${escapeHtml(opsState.userStart)}" data-ops-user-date="start" />
        <span class="res-arrow">→</span>
        <input type="text" inputmode="numeric" aria-label="创建结束日期" placeholder="创建结束日期" value="${escapeHtml(opsState.userEnd)}" data-ops-user-date="end" />
        ${RES_ICONS.calendar}
      </div>
      ${auditFields}
    </div>
  `;
}
function opsPresetDates(key) {
  const end = new Date(2026, 6, 14);
  const fm = (d) => `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;
  if (key === "today") return { start: fm(end), end: fm(end) };
  const n = key === "7d" ? 7 : key === "30d" ? 30 : 14;
  const s = new Date(end);
  s.setDate(s.getDate() - n + 1);
  return { start: fm(s), end: fm(end) };
}
function opsAgentTypeTag(type) {
  const map = {
    "通用专家": "primary",
    "数字员工专家": "success",
    "RAG 专家": "warning",
    "自主规划专家": "info",
    "专家团队": "danger",
    "定制专家": "info",
  };
  return opsTag(type, map[type] || "");
}
function opsExportBtn(which) {
  const dl = '<svg class="wj-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12"/><path d="m7 11 5 5 5-5"/><path d="M5 21h14"/></svg>';
  return `<button class="btn ops-export-btn" data-handler="${registerHandler({ type: "opsExport", which })}">${dl}<span>导出</span></button>`;
}
function opsExportCsv(filename, headers, rows) {
  const csv = [headers, ...rows].map((r) => r.map((c) => `"${String(c).replace(/"/g, '""')}"`).join(",")).join("\n");
  const blob = new Blob(["﻿" + csv], { type: "text/csv;charset=utf-8" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(a.href);
}

function opsAgentSearchBox() {
  return `<div class="ops-search"><span class="ops-search-icon">${icon("search")}</span><input class="ops-search-input" type="text" placeholder="按所属部门搜索" data-ops-agent-search value="${escapeHtml(opsState.agentQuery)}" /></div>`;
}
function opsSortableTh(label, colKey) {
  const sort = opsState._agentSort;
  const active = sort.col === colKey;
  const arrow = active ? (sort.dir === "desc" ? "  ▼" : "  ▲") : "  —";
  return `<button class="ops-sort-th" data-handler="${registerHandler({ type: "opsSortAgent", col: colKey })}">${label}<span class="ops-sort-indicator${active ? " active" : ""}">${arrow}</span></button>`;
}

// ==================== 资源总览（复刻设计稿） ====================
const RES_TOOL_TYPES = [
  { name: "API", value: 37.21, color: "#5B5FEF" },
  { name: "MCP", value: 23.26, color: "#2FBF71" },
  { name: "处理组件", value: 39.53, color: "#F59A23" },
];
const RES_DEPTS = [
  { name: "基础设施部", value: 0.66, color: "#8B5CF6" },
  { name: "集团领导", value: 1.97, color: "#EC4899" },
  { name: "试用部门", value: 1.31, color: "#06B6D4" },
  { name: "研发部门", value: 25.66, color: "#23BF6B" },
  { name: "售前/销售部门", value: 20.39, color: "#F7C948" },
  { name: "研发管理部", value: 3.29, color: "#F59A23" },
  { name: "客户服务部", value: 44.74, color: "#F0532D" },
  { name: "数字智能部", value: 0.66, color: "#5B8DEF" },
  { name: "综合监督部", value: 1.32, color: "#94A3B8" },
];
const RES_LEGEND_PER_PAGE = 7;
function resSvg(body, stroke) {
  return `<svg viewBox="0 0 24 24" fill="${stroke ? "none" : "currentColor"}" stroke="${stroke ? "currentColor" : "none"}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${body}</svg>`;
}
const RES_ICONS = {
  agent: resSvg('<rect x="3" y="3" width="8" height="8" rx="2"/><rect x="13" y="3" width="8" height="8" rx="2"/><rect x="3" y="13" width="8" height="8" rx="2"/><rect x="13" y="13" width="8" height="8" rx="2"/>'),
  flow: resSvg('<circle cx="5.5" cy="5.5" r="2.5"/><circle cx="18.5" cy="5.5" r="2.5"/><circle cx="12" cy="18.5" r="2.5"/><path d="M6.5 7.5 10.8 16.6M17.5 7.5 13.2 16.6M8 5.5h8"/>', true),
  kb: resSvg('<path d="M4 19.5V5a2 2 0 0 1 2-2h14v16H6a2 2 0 0 0-2 2zm0 0a2 2 0 0 0 2 2h14"/>', true),
  tool: resSvg('<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>', true),
  dept: resSvg('<rect x="9" y="3" width="6" height="5" rx="1"/><rect x="2" y="16" width="6" height="5" rx="1"/><rect x="16" y="16" width="6" height="5" rx="1"/><path d="M12 8v3M5 16v-2h14v2M12 11v3"/>', true),
  user: resSvg('<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.6-6 8-6s8 2 8 6"/>', true),
  chat: resSvg('<circle cx="12" cy="12" r="9"/><path d="M8.5 14a4.5 4.5 0 0 0 7 0"/><circle cx="9" cy="10" r="0.6"/><circle cx="15" cy="10" r="0.6"/>', true),
  file: resSvg('<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 8h6M9 12h6"/>', true),
  calendar: resSvg('<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M8 3v4M16 3v4M3 10h18"/>', true),
  chevron: resSvg('<path d="m6 9 6 6 6-6"/>', true),
};

function resStatCard(label, value, iconKey, bg, color) {
  return `
    <div class="res-stat-card">
      <div class="res-stat-top">
        <span class="res-stat-label">${label}</span>
        <span class="res-stat-icon" style="background:${bg};color:${color}">${RES_ICONS[iconKey]}</span>
      </div>
      <div class="res-stat-value">${value}</div>
    </div>
  `;
}
function resFilterBar() {
  return `
    <div class="res-filters">
      <div class="res-select">请选择部门${RES_ICONS.chevron}</div>
      <div class="res-select res-select-sm">至今${RES_ICONS.chevron}</div>
      <div class="res-select res-daterange"><span>创建开始日期</span><span class="res-arrow">→</span><span>创建结束日期</span>${RES_ICONS.calendar}</div>
      <button class="btn res-reset">重 置</button>
    </div>
  `;
}
function resLegendHtml(items, withPager) {
  const page = opsState._resDeptPage || 0;
  const pages = Math.ceil(RES_DEPTS.length / RES_LEGEND_PER_PAGE);
  const shown = withPager ? items.slice(page * RES_LEGEND_PER_PAGE, (page + 1) * RES_LEGEND_PER_PAGE) : items;
  return `
    <div class="res-legend">
      <div class="res-legend-items">${shown.map((d) => `<span class="res-legend-item"><i style="background:${d.color}"></i>${d.name}</span>`).join("")}</div>
      ${withPager ? `
        <div class="res-legend-pager">
          <button class="res-legend-btn" data-handler="${registerHandler({ type: "opsResDeptPage", dir: -1 })}" ${page === 0 ? "disabled" : ""}>◀</button>
          <span>${page + 1}/${pages}</span>
          <button class="res-legend-btn" data-handler="${registerHandler({ type: "opsResDeptPage", dir: 1 })}" ${page >= pages - 1 ? "disabled" : ""}>▶</button>
        </div>
      ` : ""}
    </div>
  `;
}
function resUsageMetrics() {
  const items = [
    { label: "活跃用户数", value: "0", unit: "个", icon: "user", bg: "#F0F1F5", color: "#64748B" },
    { label: "工作流调用量", value: "0", unit: "个", icon: "flow", bg: "#E8F0FE", color: "#3B82F6" },
    { label: "智能体交互量", value: "0", unit: "次", icon: "chat", bg: "#EEEDFC", color: "#766BF2" },
  ];
  return `
    <div class="res-usage">
      ${items.map((it) => `
        <div class="res-usage-item">
          <div class="res-usage-label"><span class="res-usage-ico" style="background:${it.bg};color:${it.color}">${RES_ICONS[it.icon]}</span>${it.label}</div>
          <div class="res-usage-value">${it.value} <span>${it.unit}</span></div>
        </div>
      `).join("")}
    </div>
  `;
}
function resTopRows() {
  const colors = ["#F59A23", "#4E8AF4", "#4E8AF4"];
  let rows = "";
  for (let i = 1; i <= 10; i++) {
    const color = colors[i - 1] || "#9AA0B0";
    rows += `
      <div class="res-top-row">
        <span class="res-top-idx" style="color:${color}">TOP${i}</span>
        <span class="res-top-ico">${RES_ICONS.file}</span>
        <span class="res-top-name">暂无</span>
      </div>
    `;
  }
  return `<div class="res-top-list">${rows}</div>`;
}
function opsResourceOverview() {
  return `
    ${resFilterBar()}
    <div class="res-section-title">资产总数统计</div>
    <div class="res-stat-grid">
      ${resStatCard("智能体数", 84, "agent", "#EEEDFC", "#766BF2")}
      ${resStatCard("工作流总数", 12, "flow", "#E8F0FE", "#3B82F6")}
      ${resStatCard("知识库总数", 114, "kb", "#E7F8EF", "#23BF6B")}
      ${resStatCard("自定义工具总数", 43, "tool", "#FEF3E6", "#F59A23")}
      ${resStatCard("部门总数", 9, "dept", "#F1EBFE", "#8B5CF6")}
      ${resStatCard("已注册用户量", 152, "user", "#F0F1F5", "#64748B")}
    </div>
    <div class="ops-grid-2">
      ${opsPanel("自定义工具占比", opsChartEl("res-tool-pie", 300) + resLegendHtml(RES_TOOL_TYPES, false), "")}
      ${opsPanel("部门分布", opsChartEl("res-dept-pie", 300) + resLegendHtml(RES_DEPTS, true), "")}
    </div>
    <div class="res-section-title">使用量统计</div>
    <section class="ops-panel"><div class="ops-panel-body">${resUsageMetrics()}</div></section>
    <div class="res-section-title">使用次数top10</div>
    <div class="ops-grid-2">
      ${opsPanel("智能体", resTopRows(), "")}
      ${opsPanel("工作流", resTopRows(), "")}
    </div>
  `;
}

// ==================== 操作审计 ====================
const OPS_AUDIT_LOGS = [
  { time: "2026-09-02 15:42:18", user: "杨明", account: "yangming", type: "系统配置变更", object: "参数设置", content: "修改审计日志保留期限：365 天 → 730 天", ip: "10.18.32.46", result: "成功", id: "AUD-20260902-001286", before: "365 天", after: "730 天" },
  { time: "2026-09-02 15:36:05", user: "陈晨", account: "chenchen", type: "知识库/智能体资源变更", object: "知识库", content: "发布知识库「集团制度知识库」V12", ip: "10.18.31.17", result: "成功", id: "AUD-20260902-001285", before: "V11 / 草稿", after: "V12 / 已发布" },
  { time: "2026-09-02 15:28:51", user: "李哲", account: "lizhe", type: "告警处理", object: "安全告警", content: "关闭告警「模型接口异常调用」并填写处理说明", ip: "10.18.24.91", result: "成功", id: "AUD-20260902-001284", before: "待处理", after: "已关闭" },
  { time: "2026-09-02 15:21:36", user: "王宁", account: "wangning", type: "对话发起", object: "智能体", content: "发起与智能体「企业制度助手」的对话", ip: "10.18.45.30", result: "成功", id: "AUD-20260902-001283", before: "—", after: "会话已创建" },
  { time: "2026-09-02 15:13:22", user: "赵敏", account: "zhaomin", type: "账号与席位管理", object: "用户账号", content: "为用户 zhangwei 分配专业版席位", ip: "10.18.30.12", result: "成功", id: "AUD-20260902-001282", before: "无席位", after: "专业版席位" },
  { time: "2026-09-02 15:08:10", user: "admin", account: "admin", type: "登录登出", object: "管理后台", content: "账号登录失败：密码校验未通过", ip: "172.16.4.82", result: "失败", id: "AUD-20260902-001281", before: "—", after: "登录失败" },
  { time: "2026-09-02 14:56:47", user: "周晓", account: "zhouxiao", type: "知识库/智能体资源变更", object: "智能体", content: "修改智能体「采购风险助手」系统提示词", ip: "10.18.41.76", result: "成功", id: "AUD-20260902-001280", before: "提示词版本 8", after: "提示词版本 9" },
  { time: "2026-09-02 14:48:03", user: "审计管理员", account: "auditor", type: "审计导出", object: "审计日志", content: "导出近 7 天全部操作日志，共 8,521 条", ip: "10.18.20.8", result: "成功", id: "AUD-20260902-001279", before: "—", after: "XLSX / 8,521 条" },
];

function opsAuditTypeTone(type) {
  if (type.includes("配置")) return "config";
  if (type.includes("资源")) return "resource";
  if (type.includes("告警")) return "alert";
  if (type.includes("账号")) return "account";
  if (type.includes("登录")) return "login";
  if (type.includes("对话")) return "chat";
  return "export";
}
function opsAuditShortType(type) {
  return type === "知识库/智能体资源变更" ? "资源变更" : type;
}
function opsAuditRows() {
  const f = opsState.auditApplied;
  const q = (f.operator || "").trim().toLowerCase();
  return OPS_AUDIT_LOGS.filter((row) => {
    const matchOperator = !q || `${row.user}${row.account}`.toLowerCase().includes(q);
    const matchType = f.type === "all" || (f.type === "资源变更" ? row.type.includes("资源变更") : row.type === f.type);
    const matchResult = f.result === "all" || row.result === f.result;
    return matchOperator && matchType && matchResult;
  });
}
function opsAuditSelectOptions(items, current) {
  return items.map(([value, label]) => `<option value="${value}" ${value === current ? "selected" : ""}>${label}</option>`).join("");
}
function opsAuditFilterBar() {
  const f = opsState.auditFilter;
  return `
    <div class="res-filters ops-audit-filters ops-audit-filters-inline">
      <label class="ops-audit-filter-field operator">
        <input class="ops-audit-control" data-ops-audit-filter="operator" aria-label="操作人" placeholder="关键词搜索" value="${escapeHtml(f.operator)}" />
      </label>
      <label class="ops-audit-filter-field type">
        <select class="ops-audit-control" data-ops-audit-filter="type" aria-label="操作类型">
          ${opsAuditSelectOptions([["all", "操作类型"], ["登录登出", "登录登出"], ["账号与席位管理", "账号与席位管理"], ["系统配置变更", "系统配置变更"], ["资源变更", "知识库/智能体资源变更"], ["对话发起", "对话发起"], ["告警处理", "告警处理"], ["审计导出", "审计导出"]], f.type)}
        </select>
      </label>
      <label class="ops-audit-filter-field result">
        <select class="ops-audit-control" data-ops-audit-filter="result" aria-label="操作结果">
          ${opsAuditSelectOptions([["all", "操作结果"], ["成功", "成功"], ["失败", "失败"]], f.result)}
        </select>
      </label>
      <button class="btn res-reset ops-audit-reset" data-handler="${registerHandler({ type: "opsAuditReset" })}">重 置</button>
    </div>
  `;
}
function opsAuditSummaryCard(label, value, unit, iconKey, tone) {
  return `
    <div class="ops-audit-summary-card">
      <div><span>${label}</span><strong>${value}<em>${unit}</em></strong></div>
      <span class="ops-audit-summary-icon ${tone || ""}">${icon(iconKey, "wj-icon")}</span>
    </div>
  `;
}
function opsAuditTable() {
  const rows = opsAuditRows();
  const body = rows.length ? rows.map((row) => `
    <tr>
      <td class="ops-audit-time" title="${row.time}">${row.time}</td>
      <td title="${row.account}">${row.user}</td>
      <td><span class="ops-audit-tag ${opsAuditTypeTone(row.type)}">${opsAuditShortType(row.type)}</span></td>
      <td>${row.object}</td>
      <td class="ops-audit-content" title="${row.content}">${row.content}</td>
      <td class="ops-audit-ip">${row.ip}</td>
      <td><span class="ops-audit-status ${row.result === "失败" ? "fail" : ""}">${row.result}</span></td>
      <td>${opsLink("详情", { type: "opsAuditDetail", id: row.id })}</td>
    </tr>
  `).join("") : `<tr><td colspan="8"><div class="ops-audit-empty">未查询到符合条件的审计日志</div></td></tr>`;
  const f = opsState.auditFilter;
  return `
    <section class="ops-audit-table-card">
      <div class="ops-audit-table-head ops-audit-table-head-row">
        <div class="ops-audit-table-left">
          <div class="ops-audit-table-title"><strong>审计日志</strong><span>当前显示 ${rows.length} 条</span></div>
        </div>
        <div class="ops-audit-table-tools">
          <button class="btn" data-handler="${registerHandler({ type: "opsAuditModal", modal: "rangeAudit" })}">${icon("filterCalendar", "wj-icon")}<span>审计期限配置</span></button>
          <button class="btn primary" data-handler="${registerHandler({ type: "opsAuditModal", modal: "export" })}">${icon("frontDownload", "wj-icon")}<span>导出</span></button>
          <button class="icon-btn" data-handler="${registerHandler({ type: "opsAuditRefresh" })}" aria-label="刷新">${icon("frontActionRefresh", "wj-icon")}</button>
        </div>
      </div>
      <div class="ops-audit-table-wrap">
        <table class="ops-table ops-audit-table">
          <thead><tr><th>操作时间</th><th>操作人</th><th>操作类型</th><th>操作对象</th><th>操作内容</th><th>来源 IP</th><th>结果</th><th>操作</th></tr></thead>
          <tbody>${body}</tbody>
        </table>
      </div>
      <div class="ops-audit-pagination"><span>共 ${rows.length} 条</span><button disabled>‹</button><button class="active">1</button><button>2</button><button>3</button><button>…</button><button>161</button><button>›</button></div>
    </section>
  `;
}
function opsAuditOverview() {
  return `
    <div class="ops-audit-page">
      ${opsUserFilterBar(true)}
      <div class="ops-audit-summary-grid">
        ${opsAuditSummaryCard("日质量", "1,286", "条", "file", "primary")}
        ${opsAuditSummaryCard("操作人数", "47", "人", "user", "primary")}
        ${opsAuditSummaryCard("失败操作", "18", "条", "info", "danger")}
      </div>
      <div class="ops-audit-notice">${icon("check", "wj-icon")}<span><strong>日志完整性保护已启用</strong>所有审计记录均为仅追加写入，管理员也无法编辑或删除；导出行为本身也会产生审计记录。</span></div>
      ${opsAuditTable()}
      <div class="ops-audit-toast" role="status">${icon("check", "wj-icon")}<span></span></div>
    </div>
  `;
}
function opsAuditToast(message) {
  requestAnimationFrame(() => {
    const toast = document.querySelector(".ops-audit-toast");
    if (!toast) return;
    toast.querySelector("span").textContent = message;
    toast.classList.add("show");
    clearTimeout(opsAuditToast.timer);
    opsAuditToast.timer = setTimeout(() => toast.classList.remove("show"), 2200);
  });
}
function opsAuditDetailHtml(id) {
  const row = OPS_AUDIT_LOGS.find((item) => item.id === id) || OPS_AUDIT_LOGS[0];
  const fields = [
    ["日志编号", row.id], ["操作时间", row.time], ["操作人", `${row.user}（${row.account}）`], ["来源 IP", row.ip],
    ["操作类型", row.type], ["操作结果", row.result], ["操作对象", row.object], ["客户端", "Chrome / macOS"],
  ];
  return `
    <div class="ops-audit-detail">
      <section><h3>基本信息</h3><div class="ops-audit-detail-grid">${fields.map(([key, value]) => `<div><span>${key}</span><strong>${value}</strong></div>`).join("")}</div></section>
      <section><h3>操作内容</h3><div class="ops-audit-diff"><div><span>操作说明</span><strong>${row.content}</strong></div><div><span>变更前</span><strong>${row.before}</strong></div><div><span>变更后</span><strong>${row.after}</strong></div></div></section>
      <section><h3>完整性校验</h3><div class="ops-audit-integrity">${icon("check", "wj-icon")}<span><strong>校验通过</strong><em>该记录已采用仅追加方式写入，记录编号与内容摘要一致。</em></span></div></section>
    </div>
  `;
}
function renderAgentRoiModal() {
  const m = opsState._agentRoiModal;
  if (!m) return "";
  const manual = Number(m.manualTime || 0);
  const agent = Number(m.agentTime || 0);
  const preview = (manual > 0 && agent > 0) ? ((manual - agent) / manual * 100).toFixed(1) + "%" : "—";
  return `
    <div class="modal-mask" data-handler="${registerHandler({ type: "opsAgentRoiClose" })}"></div>
    <section class="modal ops-roi-modal">
      <div class="modal-head">
        <span>计算 ROI · ${escapeHtml(m.name)}</span>
        <button class="icon-btn" data-handler="${registerHandler({ type: "opsAgentRoiClose" })}">${icon("close")}</button>
      </div>
      <div class="modal-body">
        <div class="ops-roi-fields">
          <label class="ops-roi-field">
            <span>原始人工用时</span>
            <input type="text" inputmode="decimal" class="ops-roi-input" data-ops-roi-input="manual" value="${m.manualTime || ""}" placeholder="例如：8 小时" />
            <em>单位：小时 / 次（人工完成该任务平均花费的时间）</em>
          </label>
          <label class="ops-roi-field">
            <span>专家用时</span>
            <input type="text" inputmode="decimal" class="ops-roi-input" data-ops-roi-input="agent" value="${m.agentTime || ""}" placeholder="例如：0.5 小时" />
            <em>单位：小时 / 次（使用专家后平均花费的时间）</em>
          </label>
        </div>
        <div class="ops-roi-preview">
          <span class="ops-roi-preview-label">ROI 预览（节省率）</span>
          <strong class="ops-roi-preview-value ${preview !== "—" && parseFloat(preview) > 50 ? "good" : ""}">${preview}</strong>
          <span class="ops-roi-preview-formula">公式：(人工用时 − 专家用时) ÷ 人工用时 × 100%</span>
          ${m.error ? `<div class="ops-roi-error">${escapeHtml(m.error)}</div>` : ""}
        </div>
      </div>
      <div class="modal-foot">
        <button class="btn" data-handler="${registerHandler({ type: "opsAgentRoiClose" })}">取 消</button>
        <button class="btn primary" data-handler="${registerHandler({ type: "opsAgentRoiConfirm" })}">确认计算</button>
      </div>
    </section>
  `;
}
function renderOpsAuditModal() {
  const modal = opsState._auditModal;
  if (!modal) return "";
  if (modal === "retention") {
    return `
      <div class="modal-mask" data-handler="${registerHandler({ type: "opsAuditCloseModal" })}"></div>
      <section class="modal ops-audit-modal">
        <div class="modal-head"><span>审计日志保留策略</span><button class="icon-btn" data-handler="${registerHandler({ type: "opsAuditCloseModal" })}">${icon("close")}</button></div>
        <div class="modal-body">
          <div class="ops-audit-modal-notice">${icon("info", "wj-icon")}<span>系统默认保留 1 年。到期日志由系统按照合规策略自动处理，任何用户均不可手动删除。</span></div>
          <label class="ops-audit-retention"><span>保留期限</span><div><input type="number" min="30" max="3650" value="${opsState.retentionDays}" data-audit-retention /><em>天</em></div><small>可设置 30～3650 天。策略变更将记录到审计日志中。</small></label>
        </div>
        <div class="modal-foot"><button class="btn" data-handler="${registerHandler({ type: "opsAuditCloseModal" })}">取 消</button><button class="btn primary" data-handler="${registerHandler({ type: "opsAuditSaveRetention" })}">保存配置</button></div>
      </section>
    `;
  }
  if (modal === "rangeAudit") {
    const r = opsState._auditRange;
    const presets = [
      ["today", "今天"],
      ["7d", "近 7 天"],
      ["30d", "近 30 天"],
      ["90d", "近 90 天"],
      ["180d", "近 180 天"],
      ["custom", "自定义时间"],
    ];
    return `
      <div class="modal-mask" data-handler="${registerHandler({ type: "opsAuditCloseModal" })}"></div>
      <section class="modal ops-audit-modal ops-audit-range-modal">
        <div class="modal-head"><span>审计期限配置</span><button class="icon-btn" data-handler="${registerHandler({ type: "opsAuditCloseModal" })}">${icon("close")}</button></div>
        <div class="modal-body">
          <div class="ops-audit-modal-notice">${icon("filterCalendar", "wj-icon")}<span>配置导出与查询默认作用的审计时间范围。选择预设可快速切换；自定义模式下请填写开始与结束日期。</span></div>
          <div class="ops-audit-range-presets" role="radiogroup" aria-label="审计期限预设">
            ${presets.map(([k, label]) => `
              <label class="ops-audit-range-preset"><input type="radio" name="audit-range-preset" value="${k}" ${r.preset === k ? "checked" : ""} data-audit-range-preset="${k}" /><span>${label}</span></label>
            `).join("")}
          </div>
          <div class="ops-audit-range-custom ${r.preset === "custom" ? "show" : ""}">
            <label class="ops-audit-range-field">
              <span>开始日期</span>
              <input type="date" class="ops-audit-range-date" data-audit-range="start" value="${r.start}" />
            </label>
            <span class="ops-audit-range-sep">至</span>
            <label class="ops-audit-range-field">
              <span>结束日期</span>
              <input type="date" class="ops-audit-range-date" data-audit-range="end" value="${r.end}" />
            </label>
          </div>
          <label class="ops-audit-range-toggle">
            <input type="checkbox" data-audit-range="applyToExport" ${r.applyToExport ? "checked" : ""} />
            <span><strong>导出时自动应用此期限</strong><em>未开启时，导出仍以列表筛选条件为准；开启后将强制以本配置覆盖时间范围</em></span>
          </label>
          <p class="ops-audit-form-hint">期限修改后将用于后续的审计查询与导出，合规审计场景下建议保留不低于 90 天。</p>
        </div>
        <div class="modal-foot">
          <button class="btn" data-handler="${registerHandler({ type: "opsAuditCloseModal" })}">取 消</button>
          <button class="btn primary" data-handler="${registerHandler({ type: "opsAuditSaveRange" })}">保存配置</button>
        </div>
      </section>
    `;
  }
  return `
    <div class="modal-mask" data-handler="${registerHandler({ type: "opsAuditCloseModal" })}"></div>
    <section class="modal ops-audit-modal">
      <div class="modal-head"><span>导出审计日志</span><button class="icon-btn" data-handler="${registerHandler({ type: "opsAuditCloseModal" })}">${icon("close")}</button></div>
      <div class="modal-body">
        <label class="ops-audit-radio"><input type="radio" name="audit-scope" checked /><span><strong>导出当前查询结果</strong><em>将应用页面中已设置的时间、操作人、类型与结果筛选条件</em></span></label>
        <label class="ops-audit-radio"><input type="radio" name="audit-scope" /><span><strong>导出当前页</strong><em>仅导出当前页面展示的审计日志</em></span></label>
        <label class="ops-audit-format"><span>文件格式</span><select><option>Excel（.xlsx）</option><option>CSV（.csv）</option></select></label>
        <p class="ops-audit-form-hint">为避免超大文件，单次最多导出 100,000 条。导出操作将自动写入审计日志。</p>
      </div>
      <div class="modal-foot"><button class="btn" data-handler="${registerHandler({ type: "opsAuditCloseModal" })}">取 消</button><button class="btn primary" data-handler="${registerHandler({ type: "opsAuditConfirmExport" })}">确认导出</button></div>
    </section>
  `;
}

// ==================== 运营监控页 ====================
function renderOpsOverview() {
  const tabs = ["资源总览", "用户消耗", "应用运营总览", "操作审计"].map((t) =>
    `<button class="subtab ${t === opsState.tab ? "active" : ""}" data-handler="${registerHandler({ type: "opsSetTab", tab: t })}">${t}</button>`
  ).join("");
  let body;
  if (opsState.tab === "用户消耗") body = opsUserFilterBar() + opsUserDataSection();
  else if (opsState.tab === "应用运营总览") body = opsUserFilterBar() + opsAgentDataSection();
  else if (opsState.tab === "操作审计") body = opsAuditOverview();
  else body = opsResourceOverview();
  return `
    <div class="ops-page">
      <div class="subtabs ops-pills">${tabs}</div>
      ${body}
    </div>
  `;
}

// ---- 用户数据 tab ----
function opsUserDataSection() {
  const dm = OPS_DEPT_METRIC["集团总公司"];
  const mult = opsRangeMult();
  const tk = (dm.tokens * mult).toFixed(1);
  const cost = opsCost(dm.tokens * mult);
  const users = opsNum(dm.users);
  const nu = opsNum(Math.round(dm.users * 0.12));
  const cu = Math.round(dm.users * 17.5).toLocaleString();
  return `
    <div class="ops-kpi-grid cols-5">
      ${opsKpi("Token 消耗", tk, "亿", "全集团在统计周期内消耗的 Token 总量（输入+输出）")}
      ${opsKpi("费用消耗", cost.toLocaleString(), "元", "全集团在统计周期内按各模型单价核算的费用总额")}
      ${opsKpi("活跃用户数", users.toLocaleString(), "人", "全集团在统计周期内去重的活跃用户数")}
      ${opsKpi("新增用户数", nu.toLocaleString(), "人", "全集团在统计周期内新增的账号数")}
      ${opsKpi("累计用户数", cu, "人", "全集团累计注册 / 开通的账号总数")}
    </div>
    <div class="ops-grid-2">
      ${opsPanel("Token 消耗趋势", opsChartEl("ops-token", 280), "", "全集团在统计周期内每日 Token 消耗趋势")}
      ${opsPanel("费用消耗趋势", opsChartEl("ops-cost-trend", 280), "", "全集团在统计周期内每日费用消耗趋势（按各模型单价核算）")}
    </div>
    ${(() => {
      const d = opsState._userDrillDept;
      const children = d ? opsDeptChildren(d) : [];
      if (!d || !children.length) {
        return `<div class="ops-grid-2">
          ${opsPanel("部门 Token 占比", opsChartEl("ops-dept-pie", 280), "", "各一级部门 Token 消耗占全集团总量的比例；点击父部门扇区可查看其子部门细分")}
          ${opsPanel("部门花费占比", opsChartEl("ops-dept-cost-pie", 280), "", "各一级部门费用消耗占全集团总量的比例；点击父部门扇区可查看其子部门细分")}
        </div>`;
      }
      return `<div class="ops-grid-2">
        ${opsPanel(d + " 子部门 Token 占比", opsChartEl("ops-dept-token-drill", 280), '<button class="btn ops-drill-back" data-handler="' + registerHandler({ type: "opsUserDrillUp" }) + '">← 返回全部</button>', d + "各子部门的 Token 消耗占比")}
        ${opsPanel(d + " 子部门花费占比", opsChartEl("ops-dept-cost-drill", 280), "", d + "各子部门的费用消耗占比")}
      </div>`;
    })()}
    <div class="ops-grid-2">
      ${opsPanel("各模型 Token 消耗", opsChartEl("ops-model-token", 300), "", "GLM / deepseek / doubao 六个模型的 Token 消耗对比")}
      ${opsPanel("各模型费用消耗", opsChartEl("ops-model-cost", 300), "", "六个模型按各自单价核算的费用消耗对比")}
    </div>
    ${opsPanel("用户列表", opsUserTable(), opsExportBtn("users"), "全集团用户 Token 与费用消耗明细")}
  `;
}

function opsUserTable() {
  const sorted = OPS_USER_LIST.slice().sort((a, b) => b.tokens - a.tokens);
  const pageSize = 10;
  const pageCount = Math.max(1, Math.ceil(sorted.length / pageSize));
  const page = Math.min(pageCount, Math.max(1, opsState.userPage || 1));
  const rows = sorted.slice((page - 1) * pageSize, page * pageSize).map((u, i) => [
    ((page - 1) * pageSize + i + 1).toString(),
    u.user,
    u.dept,
    (u.tokens * opsRangeMult()).toFixed(1) + " 亿",
    opsCost(u.tokens * opsRangeMult()).toLocaleString() + " 元",
    opsLink("安全分析", { type: "opsUserSecurity", user: u.user }),
  ]);
  const pageButtons = Array.from({ length: pageCount }, (_, i) => i + 1).map((n) =>
    `<button class="${n === page ? "active" : ""}" data-handler="${registerHandler({ type: "opsUserPage", page: n })}">${n}</button>`
  ).join("");
  return `
    ${opsTable(["排名", "用户", "所属部门", "Token 消耗", "费用消耗", "操作"], rows)}
    <div class="ops-user-pagination">
      <span>共 ${sorted.length} 条</span>
      <button data-handler="${registerHandler({ type: "opsUserPage", page: page - 1 })}" ${page === 1 ? "disabled" : ""}>‹</button>
      ${pageButtons}
      <button data-handler="${registerHandler({ type: "opsUserPage", page: page + 1 })}" ${page === pageCount ? "disabled" : ""}>›</button>
    </div>
  `;
}

function opsUserSecurityHtml(name) {
  const u = OPS_USER_LIST.find((item) => item.user === name) || OPS_USER_LIST[0];
  const tokenValue = +(u.tokens * opsRangeMult()).toFixed(1);
  const costValue = opsCost(u.tokens * opsRangeMult()).toLocaleString();
  const score = u.tokens >= 15 ? 42 : u.tokens >= 10 ? 28 : 16;
  const level = score >= 40 ? "需关注" : "低风险";
  const tone = score >= 40 ? "warning" : "success";
  return `
    <div class="ops-security-summary">
      <div>
        <span class="ops-security-label">综合风险</span>
        <strong>${level}</strong>
        <small>风险评分 ${score} / 100</small>
      </div>
      ${opsTag(level, tone)}
    </div>
    <section class="ops-security-section">
      <h3>用户概况</h3>
      <div class="ops-security-grid">
        <div><span>用户</span><strong>${u.user}</strong></div>
        <div><span>所属部门</span><strong>${u.dept}</strong></div>
        <div><span>Token 消耗</span><strong>${tokenValue} 亿</strong></div>
        <div><span>费用消耗</span><strong>${costValue} 元</strong></div>
        <div><span>调用次数</span><strong>${Math.round(u.calls * opsRangeMult())} 次</strong></div>
        <div><span>最近活跃</span><strong>${u.last}</strong></div>
      </div>
    </section>
    <section class="ops-security-section">
      <h3>安全检测</h3>
      <div class="ops-security-checks">
        <div><span>高频调用检测</span>${opsTag(u.tokens >= 15 ? "轻度异常" : "正常", u.tokens >= 15 ? "warning" : "success")}</div>
        <div><span>非工作时段访问</span>${opsTag("正常", "success")}</div>
        <div><span>费用突增检测</span>${opsTag("正常", "success")}</div>
        <div><span>敏感资源访问</span>${opsTag("未发现", "success")}</div>
      </div>
      <p>分析结果基于当前统计周期内的调用频率、资源消耗和访问行为，仅用于原型演示。</p>
    </section>
  `;
}

// ---- 应用运营概览 tab ----
// 部门调用量排行（与左侧 Token 圆环共用下钻状态 _drillDept；颜色与圆环扇区同源）
function opsCallRankRows() {
  const mult = opsRangeMult();
  const drilled = opsState._rankDept;
  const drillChildren = drilled ? opsDeptChildren(drilled) : [];
  const useDrill = drilled && drillChildren.length > 0;
  let items;
  if (useDrill) {
    items = drillChildren.map((d, i) => ({ name: d, calls: ((OPS_DEPT_METRIC[d] || {}).calls || 0) * mult, drillable: false, color: OPS_PALETTE[i % OPS_PALETTE.length] }));
  } else {
    items = OPS_TOP_DEPTS.map((d, i) => ({
      name: d,
      // 无专家明细的部门用部门汇总指标兜底，保证五个一级部门均在榜
      calls: (OPS_AGENT_LIST.filter((a) => a.dept === d).reduce((s, a) => s + a.calls, 0) || ((OPS_DEPT_METRIC[d] || {}).calls || 0)) * mult,
      drillable: opsDeptChildren(d).length > 0,
      color: OPS_PALETTE[i % OPS_PALETTE.length],
    }));
  }
  const sorted = items.filter((it) => it.calls > 0).sort((a, b) => b.calls - a.calls).slice(0, 6);
  if (!sorted.length) return `<div class="ops-empty">暂无数据</div>`;
  const max = sorted[0].calls;
  const total = sorted.reduce((s, it) => s + it.calls, 0);
  const rows = sorted.map((it, i) => `
    <div class="ops-rank-row${it.drillable ? " clickable" : ""}"${it.drillable ? ` data-handler="${registerHandler({ type: "opsRankDrill", dept: it.name })}"` : ""}>
      <span class="ops-rank-idx idx-${i + 1}">${i + 1}</span>
      <div class="ops-rank-main">
        <div class="ops-rank-label">${it.name}${it.drillable ? '<em class="ops-rank-drill">点击下钻</em>' : ""}</div>
        <div class="ops-rank-bar"><i style="width:${Math.max(4, Math.round((it.calls / max) * 100))}%;background:linear-gradient(90deg,${it.color}73,${it.color})"></i></div>
      </div>
      <div class="ops-rank-side">
        <span class="ops-rank-val">${Math.round(it.calls).toLocaleString()}</span>
        <span class="ops-rank-unit">次 · 占比 ${Math.round((it.calls / total) * 100)}%</span>
      </div>
    </div>
  `).join("");
  return `<div class="ops-rank-list">${rows}<div class="ops-rank-summary">共 ${sorted.length} 个部门 · 合计 ${Math.round(total).toLocaleString()} 次</div></div>`;
}

function opsAgentDataSection() {
  const mult = opsRangeMult();
  const totalCalls = OPS_AGENT_LIST.reduce((s, a) => s + a.calls, 0) * mult;
  const totalTokens = OPS_AGENT_LIST.reduce((s, a) => s + a.tokens * mult, 0);
  const totalCost = OPS_AGENT_LIST.reduce((s, a) => s + opsCost(a.tokens * mult), 0);
  const d = OPS_APP_STAT.deltas;
  const drilled = opsState._drillDept;
  const donutDrilled = drilled && opsDeptChildren(drilled).length > 0;
  const rankDrilledDept = opsState._rankDept;
  const rankDrilled = rankDrilledDept && opsDeptChildren(rankDrilledDept).length > 0;
  const donutExtra = donutDrilled
    ? '<button class="btn ops-drill-back" data-handler="' + registerHandler({ type: "opsDrillUp" }) + '">← 返回全部</button>'
    : "";
  const rankExtra = rankDrilled
    ? '<button class="btn ops-drill-back" data-handler="' + registerHandler({ type: "opsRankUp" }) + '">← 返回全部</button>'
    : '<span class="ops-rank-hint">点击父部门行可下钻</span>';
  const trendPills = [
    { k: "dept", label: "按部门" },
    { k: "type", label: "按专家类型" },
  ].map((o) =>
    `<button class="subtab ${(opsState._trendDim || "dept") === o.k ? "active" : ""}" data-handler="${registerHandler({ type: "opsSetTrendDim", dim: o.k })}">${o.label}</button>`
  ).join("");
  return `
    <div class="ops-kpi-grid">
      ${opsKpiCard("已上架专家总数", OPS_APP_STAT.publishedExperts.toLocaleString(), "个", "当前已上架并可供用户调用的专家总数（存量指标）", d.experts)}
      ${opsKpiCard("自动化执行任务量", Math.round(OPS_APP_STAT.autoTasks * mult).toLocaleString(), "次", "统计周期内自动化任务（定时 / 事件触发）执行的总次数", d.autoTasks)}
      ${opsKpiCard("累计调用次数", Math.round(totalCalls).toLocaleString(), "次", "统计周期内全部专家的调用总次数（含对话调用与自动化执行）", d.calls)}
      ${opsKpiCard("任务完成率", OPS_APP_STAT.taskDoneRate.toFixed(1), "%", "统计周期内自动化任务执行成功的比例", d.doneRate)}
      ${opsKpiCard("Token 消耗量", totalTokens.toFixed(1), "亿 tokens", "全部专家在统计周期内消耗的 Token 总量（输入+输出）", d.tokens)}
      ${opsKpiCard("费用消耗", totalCost.toLocaleString(), "元", "全部专家在统计周期内按各模型单价核算的费用总额", d.cost)}
    </div>
    <div class="ops-grid-2">
      ${opsPanel(donutDrilled ? drilled + " 子部门 Token 消耗" : "专家 Token 消耗对比", opsChartEl(donutDrilled ? "ops-dept-agent-drill" : "ops-dept-agent-token", 300), donutExtra, donutDrilled ? drilled + "各子部门的 Token 消耗细分；点击「返回全部」回到一级部门对比" : "按专家所属部门汇总的 Token 消耗对比；点击父部门扇区可在当前区块下钻查看其子部门细分")}
      ${opsPanel(rankDrilled ? rankDrilledDept + " · 子部门调用量排行" : "调用量排行榜", opsCallRankRows(), rankExtra, rankDrilled ? rankDrilledDept + "各子部门的专家调用量排行；点击「返回全部」回到一级部门排行" : "按部门的专家调用量排行；点击父部门行可在当前区块下钻查看其子部门排行")}
    </div>
    ${opsPanel("调用趋势", opsChartEl("ops-call-trend", 300), `<div class="subtabs ops-pills">${trendPills}</div>`, "全部专家的调用次数趋势；右上角可按部门或按专家类型两种维度切换，点击图例可筛选展示对象")}
    ${opsPanel("专家列表", opsAgentListTable(), '<div style="display:flex;align-items:center;gap:8px">' + opsAgentSearchBox() + opsExportBtn("agents") + '</div>', "全部专家明细，支持按部门搜索和按列排序；点击「查看详情」可查看对话明细与自动化执行记录")}
  `;
}

function opsAgentListTable() {
  const sort = opsState._agentSort;
  const q = (opsState.agentQuery || "").trim().toLowerCase();
  let entries = OPS_AGENT_LIST.slice();
  if (q) entries = entries.filter((a) => a.dept.toLowerCase().includes(q));
  entries.sort((a, b) => {
    let va, vb;
    if (sort.col === "calls") { va = a.calls; vb = b.calls; }
    else if (sort.col === "tokens") { va = a.tokens; vb = b.tokens; }
    else if (sort.col === "cost") { va = opsCost(a.tokens); vb = opsCost(b.tokens); }
    else { va = a.tokens; vb = b.tokens; }
    return sort.dir === "desc" ? vb - va : va - vb;
  });
  if (!entries.length) {
    return `<div class="ops-empty">未找到所属部门匹配 "${escapeHtml(opsState.agentQuery)}" 的专家</div>`;
  }
  // ROI：首行显示预置 ROI 率，其他行显示"计算"按钮；手动计算后可覆盖
  const roiSeed = opsState._agentRoiSeed || 0;
  function roiOf(a, idx) {
    return opsState._agentRoiResults[a.name] || (idx === 0 ? "93.8%" : "计算");
  }
  const rows = entries.map((a, idx) => {
    const roiText = roiOf(a, idx);
    const hasManual = !!opsState._agentRoiResults[a.name] || idx === 0;
    const roiBtn = `<button class="ops-roi-btn ${hasManual ? "computed" : ""}" data-handler="${registerHandler({ type: "opsAgentRoiModal", name: a.name })}">${roiText}</button>`;
    return [
      a.name,
      opsAgentTypeTag(a.type),
      a.dept,
      Math.round(a.calls * opsRangeMult()).toLocaleString() + " 次",
      (a.tokens * opsRangeMult()).toFixed(1) + " 亿",
      opsCost(a.tokens * opsRangeMult()).toLocaleString() + " 元",
      a.success.toFixed(1) + "%",
      a.latency.toFixed(2) + " s",
      roiBtn,
      opsLink("查看详情", { type: "opsAgentDetail", name: a.name }),
    ];
  });
  return `
    <div class="ops-table-wrap">
      <table class="ops-table">
        <thead><tr>
          <th>专家名称</th>
          <th>类型</th>
          <th>所属部门</th>
          <th>${opsSortableTh("调用量", "calls")}</th>
          <th>${opsSortableTh("Token 消耗", "tokens")}</th>
          <th>${opsSortableTh("费用消耗", "cost")}</th>
          <th>成功率</th>
          <th>平均耗时</th>
          <th>ROI</th>
          <th>操作</th>
        </tr></thead>
        <tbody>${rows.map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join("")}</tr>`).join("")}</tbody>
      </table>
    </div>
  `;
}

// ---- 抽屉内容：专家详情（对话记录 / 自动化记录）----
function opsAgentDetailHtml(name) {
  const a = OPS_AGENT_LIST.find((x) => x.name === name) || OPS_AGENT_LIST[0];
  opsState._detailName = a.name;
  const tab = opsState._detailTab === "auto" ? "auto" : "chat";
  const mult = opsRangeMult();
  const PAGE_SIZE = 10;
  const tabs = [
    { k: "chat", label: "对话记录" },
    { k: "auto", label: "自动化记录" },
  ].map((t) =>
    `<button class="subtab ${t.k === tab ? "active" : ""}" data-handler="${registerHandler({ type: "opsSetAgentDetailTab", tab: t.k })}">${t.label}</button>`
  ).join("");

  // ======== 对话明细 mock（25 条，含 ROI 计算） ========
  const CHAT_QUESTIONS = [
    "季度营收同比增长情况", "提取合同乙方关键条款", "用户反馈分类汇总", "翻译这段产品说明",
    "新员工入职培训要点", "客户投诉处理流程", "2026 Q4 预算分配建议", "竞品动态周报",
    "生成月度总结大纲", "产品需求文档初稿", "供应商风险等级评估", "舆情负面信息应对方案",
    "会议纪要快速整理", "研发项目排期建议", "合规自查报告模板", "内部知识库问答汇总",
    "行业白皮书摘要", "安全巡检清单生成", "跨部门沟通方案", "绩效考核指标建议",
    "客户续约话术整理", "新产品市场定位", "运维告警根因分析", "财务月末结账 Checklist",
    "集团年会活动策划",
  ];
  const CHAT_ANSWERS = [
    "本季度营收同比增长 12.4%，主要驱动为新业务线放量与客户留存提升。",
    "乙方：某某科技有限公司；关键条款：付款周期 30 天、违约金 5%、知识产权归甲方。",
    "共 3 类：功能 52%、性能 31%、体验 17%，建议优先处理性能类工单。",
    "已翻译为英文，术语与品牌名保持一致，共 3 段。",
    "涵盖公司文化、制度流程、岗位技能三大模块，建议 3 天集训 + 2 周在岗带教。",
    "遵循 5 步法：倾听 → 共情 → 复盘 → 方案 → 跟进，SLA 响应 30 分钟。",
    "营收 40% / 研发 25% / 市场 15% / 运营 12% / 储备 8%。",
    "本周 3 个竞品发布新版本，均聚焦 AI 原生，建议跟进定价体系。",
    "按 KPI 完成情况、关键项目进展、问题与下阶段计划三大板块展开。",
    "含背景、目标、用户故事、功能列表、验收标准、迭代计划、风险 7 大章节。",
    "高风险供应商 2 家，建议启动备选资源；中风险 5 家保持观察。",
    "按黄金 4 步法：快速回应 → 核实情况 → 给出方案 → 持续跟进。",
    "整理要点、生成待办清单、标记责任人、输出纪要。",
    "关键路径压缩 3 天，通过并行测试 + 自动化回归实现。",
    "覆盖 7 大合规领域 23 个检查点，季度滚动更新。",
    "知识库问答集中在产品功能、计费政策、API 使用三大类。",
    "摘要 1500 字，覆盖行业规模、关键玩家、技术趋势与政策环境。",
    "按告警级别、资产维度、巡检频率三维度设计。",
    "建立例会 + 同步文档 + 决策评审三层机制。",
    "采用 OKR + KPI 混合，业务与能力指标各占 50%。",
    "标准化开场 → 价值回顾 → 异议处理 → 续约方案四步法。",
    "定位为高性价比、强 AI 原生、面向中大型客户的解决方案。",
    "根因为 DB 连接池耗尽，已扩容至 200 并加熔断。",
    "含资产盘点、应收应付核对、损益结转、科目检查 4 大步骤。",
    "含主题、流程、场地、预算、推广、安全、后续跟进 7 大模块。",
  ];
  function chatRow(i) {
    const total = 500 + ((i * 73) % 4000);
    const ret = Math.round(total * (0.55 + ((i * 17) % 30) / 100));
    const req = total - ret;
    const roi = ((ret / total) * 100).toFixed(1);
    const d = new Date(2026, 6, 14 - (i % 21), 18 - (i % 12), (i * 37) % 60);
    const pad = (n) => String(n).padStart(2, "0");
    return [
      CHAT_QUESTIONS[i],
      CHAT_ANSWERS[i],
      `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}`,
      req.toLocaleString(),
      ret.toLocaleString(),
      total.toLocaleString(),
      `${roi}%`,
    ];
  }
  const CHAT_ROWS = Array.from({ length: 25 }, (_, i) => chatRow(i));

  // ======== 自动化执行 mock（25 条） ========
  const AUTO_TASKS = [
    ["每日晨报生成", "定时触发 · 每日 08:00", { key: "success", label: "成功" }, "2 分 41 秒", "12,460"],
    ["合同到期提醒", "事件触发 · 新合同入库", { key: "success", label: "成功" }, "46 秒", "3,180"],
    ["周度数据汇总", "定时触发 · 每周一 09:00", { key: "success", label: "成功" }, "5 分 08 秒", "21,740"],
    ["舆情摘要推送", "手动触发", { key: "running", label: "运行中" }, "—", "—"],
    ["供应商风险扫描", "定时触发 · 每日 22:00", { key: "danger", label: "失败" }, "1 分 12 秒", "8,930"],
    ["新员工入职引导", "事件触发 · HR OA 同步", { key: "success", label: "成功" }, "38 秒", "2,600"],
    ["周报自动归档", "定时触发 · 每周五 18:00", { key: "success", label: "成功" }, "1 分 56 秒", "6,410"],
    ["客户续约提醒", "定时触发 · 合同到期前 30 天", { key: "success", label: "成功" }, "52 秒", "3,020"],
    ["会议纪要提取", "手动触发 · 上传会议录音", { key: "info", label: "排队中" }, "—", "—"],
    ["知识库增量同步", "定时触发 · 每 30 分钟", { key: "success", label: "成功" }, "18 秒", "940"],
    ["日报邮件汇总", "定时触发 · 每日 17:30", { key: "success", label: "成功" }, "22 秒", "1,100"],
    ["安全合规巡检", "定时触发 · 每周三 02:00", { key: "danger", label: "失败" }, "—", "—"],
    ["财务报表生成", "定时触发 · 每月 1 号 06:00", { key: "success", label: "成功" }, "6 分 21 秒", "24,120"],
    ["工单自动分类", "事件触发 · 新工单入库", { key: "success", label: "成功" }, "12 秒", "580"],
    ["竞品动态抓取", "定时触发 · 每 4 小时", { key: "success", label: "成功" }, "41 秒", "2,200"],
    ["AI 客服训练数据回流", "手动触发", { key: "running", label: "运行中" }, "—", "—"],
    ["月度预算超支预警", "定时触发 · 每月 25 号 09:00", { key: "success", label: "成功" }, "34 秒", "1,750"],
    ["测试环境数据清理", "定时触发 · 每日 03:00", { key: "success", label: "成功" }, "1 分 08 秒", "4,320"],
    ["用户行为分析报告", "定时触发 · 每周二 10:00", { key: "success", label: "成功" }, "3 分 55 秒", "15,680"],
    ["工单 SLA 超时提醒", "事件触发 · 工单状态变更", { key: "success", label: "成功" }, "9 秒", "460"],
    ["文档自动摘要", "手动触发 · 选择文档", { key: "info", label: "排队中" }, "—", "—"],
    ["审计日志归档", "定时触发 · 每日 01:00", { key: "success", label: "成功" }, "2 分 12 秒", "9,820"],
    ["客户回访话术生成", "事件触发 · 通话结束", { key: "success", label: "成功" }, "28 秒", "1,480"],
    ["API 密钥到期预警", "定时触发 · 每周一 07:00", { key: "success", label: "成功" }, "11 秒", "520"],
    ["应急响应预案演练", "手动触发", { key: "info", label: "排队中" }, "—", "—"],
  ];
  function autoRow(item, i) {
    const d = new Date(2026, 6, 14 - (i % 28), 8 + (i % 10), (i * 13) % 60);
    const pad = (n) => String(n).padStart(2, "0");
    return [item[0], item[1], opsTag(item[2].label, item[2].key === "running" ? "info" : item[2].key), `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}`, item[3], item[4]];
  }
  const AUTO_ROWS = AUTO_TASKS.map(autoRow);

  // 计算 ROI（给对话明细每行随机重算一次，模拟"计算 ROI"按钮的效果）
  const chatRowsWithROI = CHAT_ROWS.map((r) => [...r.slice(0, -1), `${(parseFloat(r[6]) + (Math.random() * 4 - 2)).toFixed(1)}%`]);

  const chatPaged = opsDetailPagination(opsState._detailPageChat, PAGE_SIZE, chatRowsWithROI);
  const autoPaged = opsDetailPagination(opsState._detailPageAuto, PAGE_SIZE, AUTO_ROWS);

  return `
    <div class="ops-drawer-section">
      <div class="ops-drawer-base">
        <div class="ops-drawer-base-name">${a.name}</div>
        <div class="ops-drawer-base-row"><span class="muted">类型</span>${opsAgentTypeTag(a.type)}</div>
        <div class="ops-drawer-base-row"><span class="muted">所属部门</span>${a.dept}</div>
        <div class="ops-drawer-base-row"><span class="muted">基础指标</span>调用量 ${Math.round(a.calls * mult).toLocaleString()} 次 · Token ${(a.tokens * mult).toFixed(1)} 亿 · 成功率 ${a.success.toFixed(1)}%</div>
      </div>
      <div class="subtabs ops-pills ops-drawer-tabs">${tabs}</div>
      ${tab === "auto" ? `
        <div class="ops-drawer-section">
          <div class="ops-drawer-sub">自动化执行记录</div>
          ${opsTable(
            ["任务名称", "触发方式", "执行状态", "开始时间", "耗时", "消耗 Token"],
            autoPaged.rows
          )}
          ${autoPaged.html}
        </div>
      ` : `
        <div class="ops-drawer-section">
          <div class="ops-drawer-sub">对话明细记录</div>
          <div class="ops-drawer-toolbar">
            <span class="ops-drawer-toolbar-label">共 ${chatRowsWithROI.length} 条 · 每页 ${PAGE_SIZE} 条</span>
            <button class="btn primary ops-drawer-calc-roi" data-handler="${registerHandler({ type: "opsCalcRoi" })}">${icon("chart", "wj-icon")}<span>计算 ROI</span></button>
          </div>
          ${opsTable(
            ["问题", "答案", "创建时间", "请求 Token", "返回 Token", "总计 Token", "ROI"],
            chatPaged.rows
          )}
          ${chatPaged.html}
        </div>
      `}
    </div>
  `;
}

// ==================== 图表配置 ====================
function opsAxisLabel() { return { color: "#6a6e80", fontSize: 12 }; }
function opsAxisLine() { return { lineStyle: { color: "#EBECF4" } }; }
function opsSplitLine() { return { lineStyle: { color: "#F0F1F6" } }; }

// 专家明细 Token 与部门汇总指标的等比折算
function opsAgentTokenScale() {
  const deptTokens = {};
  for (const a of OPS_AGENT_LIST) deptTokens[a.dept] = (deptTokens[a.dept] || 0) + a.tokens;
  const listedTotal = OPS_TOP_DEPTS.reduce((s, d) => s + (deptTokens[d] || 0), 0);
  const metricTotal = OPS_TOP_DEPTS.reduce((s, d) => s + ((OPS_DEPT_METRIC[d] || {}).tokens || 0), 0);
  return { deptTokens, scale: listedTotal > 0 && metricTotal > 0 ? listedTotal / metricTotal : 1 };
}

function opsChartOption(key) {
  const baseGrid = { left: 48, right: 24, top: 40, bottom: 44 };
  const axis = opsTimeAxis();
  const n = axis.labels.length;
  const dm = OPS_DEPT_METRIC["集团总公司"];
  const tkRatio = dm.tokens / 68.4;
  if (key === "res-tool-pie" || key === "res-dept-pie") {
    const isTool = key === "res-tool-pie";
    const rows = isTool ? RES_TOOL_TYPES : RES_DEPTS;
    const total = isTool ? 43 : 152;
    return {
      tooltip: { trigger: "item", formatter: (p) => `${p.name}: ${p.value}%` },
      series: [
        {
          type: "pie", silent: true, radius: ["58%", "71%"], center: ["50%", "45%"],
          label: { show: false }, emphasis: { scale: false },
          data: [{ value: 1, itemStyle: { color: "#F0F1F6" } }],
        },
        {
          type: "pie", radius: ["58%", "71%"], center: ["50%", "45%"],
          itemStyle: { borderColor: "#fff", borderWidth: 2 },
          label: { color: "#6a6e80", fontSize: 12, formatter: (p) => p.value + "%" },
          labelLine: { length: 14, length2: 8, lineStyle: { color: "#C9CDD9" } },
          data: rows.map((d) => ({ value: d.value, name: d.name, itemStyle: { color: d.color } })),
        },
      ],
      graphic: [
        { type: "text", left: "center", top: "39%", style: { text: String(total), fill: "#32384C", fontSize: 28, fontWeight: 600, textAlign: "center" } },
        { type: "text", left: "center", top: "50%", style: { text: "总数", fill: "#9295A4", fontSize: 12, textAlign: "center" } },
      ],
    };
  }
  if (key === "ops-token") {
    return {
      color: ["#766BF2"],
      tooltip: { trigger: "axis" },
      grid: baseGrid,
      xAxis: { type: "category", boundaryGap: false, data: axis.labels, axisLabel: Object.assign({}, opsAxisLabel(), { interval: axis.interval }), axisLine: opsAxisLine(), axisTick: { show: false } },
      yAxis: { type: "value", name: "亿 Token", nameTextStyle: { color: "#9295A4", fontSize: 12 }, axisLabel: opsAxisLabel(), splitLine: opsSplitLine() },
      series: [{
        name: "Token 消耗", type: "line", smooth: true, symbol: "circle", symbolSize: 6,
        lineStyle: { width: 2 }, itemStyle: { color: "#766BF2" },
        areaStyle: { color: { type: "linear", x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: "rgba(118,107,242,0.28)" }, { offset: 1, color: "rgba(118,107,242,0.02)" }] } },
        data: opsTrend(Math.round(71 * tkRatio), n, { phase: 2 }),
      }],
    };
  }
  if (key === "ops-cost-trend") {
    const perDay = opsCost(dm.tokens) / Math.max(1, n);
    return {
      color: ["#F18019"],
      tooltip: { trigger: "axis", formatter: (p) => `${p[0].name}<br/>费用消耗 ${p[0].value.toLocaleString()} 元` },
      grid: baseGrid,
      xAxis: { type: "category", boundaryGap: false, data: axis.labels, axisLabel: Object.assign({}, opsAxisLabel(), { interval: axis.interval }), axisLine: opsAxisLine(), axisTick: { show: false } },
      yAxis: { type: "value", name: "元", nameTextStyle: { color: "#9295A4", fontSize: 12 }, axisLabel: { color: "#6a6e80", fontSize: 12, formatter: opsCostAxis }, splitLine: opsSplitLine() },
      series: [{
        name: "费用消耗", type: "line", smooth: true, symbol: "circle", symbolSize: 6,
        lineStyle: { width: 2 }, itemStyle: { color: "#F18019" },
        areaStyle: { color: { type: "linear", x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: "rgba(241,128,25,0.26)" }, { offset: 1, color: "rgba(241,128,25,0.02)" }] } },
        data: opsTrend(Math.round(perDay), n, { phase: 3 }),
      }],
    };
  }
  if (key === "ops-dept-pie") {
    return {
      color: OPS_PALETTE,
      tooltip: { trigger: "item", formatter: "{b}: {c} 亿 ({d}%)" },
      legend: { bottom: 0, textStyle: { color: "#6a6e80", fontSize: 12 } },
      series: [{
        type: "pie", radius: ["42%", "68%"], center: ["50%", "44%"],
        itemStyle: { borderColor: "#fff", borderWidth: 2 },
        label: { color: "#32384C", fontSize: 12, formatter: "{d}%" },
        data: OPS_TOP_DEPTS.map((d) => ({ value: ((OPS_DEPT_METRIC[d] || {}).tokens || 0) * opsRangeMult(), name: d })),
      }],
    };
  }
  if (key === "ops-dept-token-drill") {
    const drilled = opsState._userDrillDept || "";
    const children = opsDeptChildren(drilled);
    return {
      color: OPS_PALETTE,
      tooltip: { trigger: "item", formatter: (p) => `${p.name}: ${p.value} 亿 (${p.percent}%)` },
      legend: { bottom: 0, textStyle: { color: "#6a6e80", fontSize: 12 } },
      series: [{
        type: "pie", radius: ["42%", "68%"], center: ["50%", "44%"],
        itemStyle: { borderColor: "#fff", borderWidth: 2 },
        label: { color: "#32384C", fontSize: 12, formatter: "{d}%" },
        data: children.map((d) => ({ value: +(((OPS_DEPT_METRIC[d] || {}).tokens || 0) * opsRangeMult()).toFixed(1), name: d })),
      }],
    };
  }
  if (key === "ops-dept-cost-drill") {
    const drilled = opsState._userDrillDept || "";
    const children = opsDeptChildren(drilled);
    return {
      color: OPS_PALETTE,
      tooltip: { trigger: "item", formatter: (p) => `${p.name}: ${p.value.toLocaleString()} 元 (${p.percent}%)` },
      legend: { bottom: 0, textStyle: { color: "#6a6e80", fontSize: 12 } },
      series: [{
        type: "pie", radius: ["42%", "68%"], center: ["50%", "44%"],
        itemStyle: { borderColor: "#fff", borderWidth: 2 },
        label: { color: "#32384C", fontSize: 12, formatter: "{d}%" },
        data: children.map((d) => ({ value: opsCost(((OPS_DEPT_METRIC[d] || {}).tokens || 0) * opsRangeMult()), name: d })),
      }],
    };
  }
  if (key === "ops-dept-cost-pie") {
    return {
      color: OPS_PALETTE,
      tooltip: { trigger: "item", formatter: (p) => `${p.name}: ${p.value.toLocaleString()} 元 (${p.percent}%)` },
      legend: { bottom: 0, textStyle: { color: "#6a6e80", fontSize: 12 } },
      series: [{
        type: "pie", radius: ["42%", "68%"], center: ["50%", "44%"],
        itemStyle: { borderColor: "#fff", borderWidth: 2 },
        label: { color: "#32384C", fontSize: 12, formatter: "{d}%" },
        data: OPS_TOP_DEPTS.map((d) => ({ value: opsCost((OPS_DEPT_METRIC[d] || {}).tokens || 0), name: d })),
      }],
    };
  }
  if (key === "ops-model-token") {
    const names = OPS_MODELS.map((m) => m.name);
    return {
      color: ["#4941E6"],
      tooltip: { trigger: "axis", axisPointer: { type: "shadow" }, formatter: (p) => `${p[0].name}<br/>Token 消耗 ${p[0].value} 亿` },
      grid: { left: 48, right: 24, top: 24, bottom: 72 },
      xAxis: { type: "category", data: names, axisLabel: { color: "#6a6e80", fontSize: 11, interval: 0, rotate: 18 }, axisLine: opsAxisLine(), axisTick: { show: false } },
      yAxis: { type: "value", name: "亿", nameTextStyle: { color: "#9295A4", fontSize: 12 }, axisLabel: opsAxisLabel(), splitLine: opsSplitLine() },
      series: [{ type: "bar", barWidth: 22, itemStyle: { color: "#4941E6", borderRadius: [4, 4, 0, 0] }, data: OPS_MODELS.map((m) => +(m.tokens * opsRangeMult()).toFixed(1)) }],
    };
  }
  if (key === "ops-model-cost") {
    const names = OPS_MODELS.map((m) => m.name);
    return {
      color: ["#F18019"],
      tooltip: { trigger: "axis", axisPointer: { type: "shadow" }, formatter: (p) => `${p[0].name}<br/>费用消耗 ${p[0].value.toLocaleString()} 元` },
      grid: { left: 56, right: 24, top: 24, bottom: 72 },
      xAxis: { type: "category", data: names, axisLabel: { color: "#6a6e80", fontSize: 11, interval: 0, rotate: 18 }, axisLine: opsAxisLine(), axisTick: { show: false } },
      yAxis: { type: "value", name: "元", nameTextStyle: { color: "#9295A4", fontSize: 12 }, axisLabel: { color: "#6a6e80", fontSize: 12, formatter: opsCostAxis }, splitLine: opsSplitLine() },
      series: [{ type: "bar", barWidth: 22, itemStyle: { color: "#F18019", borderRadius: [4, 4, 0, 0] }, data: OPS_MODELS.map((m) => Math.round(opsModelCost(m) * opsRangeMult())) }],
    };
  }
  if (key === "ops-heat") {
    const data = [];
    for (let d = 0; d < 7; d++) {
      for (let h = 0; h < 24; h++) {
        const peak = (h >= 9 && h <= 18) ? 1 : 0.3;
        const wknd = d >= 5 ? 0.6 : 1;
        const v = Math.round((40 + 60 * peak * wknd + 20 * Math.sin(h / 3)) * (0.7 + 0.3 * ((d * 7 + h) % 5) / 4));
        data.push([h, d, Math.max(8, v)]);
      }
    }
    const days = ["周一", "周二", "周三", "周四", "周五", "周六", "周日"];
    return {
      tooltip: { position: "top", formatter: (p) => `${days[p.value[1]]} ${OPS_HOURS[p.value[0]]}<br/>Token ${p.value[2]}` },
      grid: { left: 48, right: 64, top: 16, bottom: 30 },
      xAxis: { type: "category", data: OPS_HOURS, splitArea: { show: false }, axisLabel: { color: "#6a6e80", fontSize: 11, interval: 1 }, axisLine: opsAxisLine(), axisTick: { show: false } },
      yAxis: { type: "category", data: days, axisLabel: opsAxisLabel(), axisLine: opsAxisLine(), axisTick: { show: false } },
      visualMap: { min: 8, max: 120, calculable: false, orient: "vertical", right: 8, top: "center", itemHeight: 120, textStyle: { color: "#6a6e80", fontSize: 11 }, inRange: { color: ["#F3F0FF", "#766BF2", "#4941E6"] } },
      series: [{ name: "Token 消耗", type: "heatmap", data, label: { show: false }, emphasis: { itemStyle: { shadowBlur: 6, shadowColor: "rgba(73,65,230,0.4)" } } }],
    };
  }
  if (key === "ops-call-trend") {
    const byType = opsState._trendDim === "type";
    const defs = byType ? OPS_AGENT_TYPES : OPS_TOP_DEPTS;
    const totalCallsOf = (d) => {
      const sum = OPS_AGENT_LIST.filter((a) => (byType ? a.type === d : a.dept === d)).reduce((s, a) => s + a.calls, 0);
      return sum || ((OPS_DEPT_METRIC[d] || {}).calls || 0);
    };
    return {
      color: OPS_PALETTE,
      tooltip: { trigger: "axis", valueFormatter: (v) => Number(v).toLocaleString() + " 次" },
      legend: { top: 0, type: "scroll", textStyle: { color: "#6a6e80", fontSize: 12 } },
      grid: { left: 64, right: 24, top: 44, bottom: 28 },
      xAxis: { type: "category", boundaryGap: false, data: axis.labels, axisLabel: Object.assign({}, opsAxisLabel(), { interval: axis.interval }), axisLine: opsAxisLine(), axisTick: { show: false } },
      yAxis: { type: "value", name: "次", nameTextStyle: { color: "#9295A4", fontSize: 12 }, axisLabel: opsAxisLabel(), splitLine: opsSplitLine() },
      series: defs.map((d, i) => ({
        name: d, type: "line", smooth: true, symbol: "circle", symbolSize: 5,
        lineStyle: { width: 2 }, emphasis: { focus: "series" },
        data: opsTrend(Math.max(20, Math.round((totalCallsOf(d) * opsRangeMult()) / Math.max(1, n))), n, { phase: i * 1.3, scale: 0.9 + 0.2 * ((i % 3) / 2) }),
      })),
    };
  }
  if (key === "ops-dept-agent-drill") {
    const drilled = opsState._drillDept || "";
    const children = opsDeptChildren(drilled);
    const { scale } = opsAgentTokenScale();
    return {
      color: OPS_PALETTE,
      tooltip: { trigger: "item", formatter: (p) => `${p.name}: ${p.value} 亿 (${p.percent}%)` },
      legend: { bottom: 6, textStyle: { color: "#6a6e80", fontSize: 12 } },
      graphic: [{ type: "text", left: "center", bottom: 34, style: { text: "所属部门", fill: "#9295A4", fontSize: 12, textAlign: "center" } }],
      series: [{
        type: "pie", radius: ["42%", "68%"], center: ["50%", "44%"],
        itemStyle: { borderColor: "#fff", borderWidth: 2 },
        label: { color: "#32384C", fontSize: 12, formatter: "{b}\n{d}%" },
        data: children.map((d) => ({ value: +((((OPS_DEPT_METRIC[d] || {}).tokens || 0) * scale) * opsRangeMult()).toFixed(1), name: d })),
      }],
    };
  }
  if (key === "ops-dept-agent-token") {
    // 无专家明细的部门按部门汇总指标等比折算，保证五个一级部门均有扇区
    const { deptTokens, scale } = opsAgentTokenScale();
    const deptValue = (d) => (deptTokens[d] || 0) > 0 ? deptTokens[d] : ((OPS_DEPT_METRIC[d] || {}).tokens || 0) * scale;
    return {
      color: OPS_PALETTE,
      tooltip: { trigger: "item", formatter: (p) => `${p.name}: ${p.value} 亿 (${p.percent}%)` },
      legend: { bottom: 6, textStyle: { color: "#6a6e80", fontSize: 12 } },
      graphic: [{ type: "text", left: "center", bottom: 34, style: { text: "所属部门", fill: "#9295A4", fontSize: 12, textAlign: "center" } }],
      series: [{
        type: "pie", radius: ["42%", "68%"], center: ["50%", "44%"],
        itemStyle: { borderColor: "#fff", borderWidth: 2 },
        label: { color: "#32384C", fontSize: 12, formatter: "{b}\n{d}%" },
        data: OPS_TOP_DEPTS.map((d) => ({ value: +(deptValue(d) * opsRangeMult()).toFixed(1), name: d })),
      }],
    };
  }
  if (key === "ops-dept-stack") {
    const types = OPS_CHART_TYPES;
    const colors = ["#4941E6", "#766BF2", "#23BF6B", "#F18019", "#EB4453", "#06B6D4", "#3B82F6", "#A855F7"];
    return {
      color: colors,
      tooltip: { trigger: "axis", axisPointer: { type: "shadow" } },
      legend: { type: "scroll", bottom: 0, textStyle: { color: "#6a6e80", fontSize: 12 } },
      grid: { left: 48, right: 24, top: 24, bottom: 64 },
      xAxis: { type: "category", data: OPS_TOP_DEPTS, axisLabel: { color: "#6a6e80", fontSize: 11, interval: 0 }, axisLine: opsAxisLine(), axisTick: { show: false } },
      yAxis: { type: "value", name: "亿", nameTextStyle: { color: "#9295A4", fontSize: 12 }, axisLabel: opsAxisLabel(), splitLine: opsSplitLine() },
      series: types.map((t, i) => ({
        name: t, type: "bar", stack: "total", barWidth: 32,
        itemStyle: { color: colors[i % colors.length] },
        data: OPS_TOP_DEPTS.map((d) => +(((OPS_DEPT_METRIC[d] || {}).tokens || 0) * (0.08 + 0.16 * ((i + 1) % 6)) * opsRangeMult()).toFixed(1)),
      })),
    };
  }
  return {};
}

function renderOpsCharts() {
  if (typeof echarts === "undefined") return;
  opsCharts.forEach((c) => { try { c.dispose(); } catch (e) {} });
  opsCharts.clear();
  document.querySelectorAll("[data-ops-chart]").forEach((el) => {
    const key = el.getAttribute("data-ops-chart");
    try {
      const inst = echarts.init(el);
      inst.setOption(opsChartOption(key));
      opsCharts.set(el, inst);
      if (key === "ops-dept-pie" || key === "ops-dept-cost-pie") {
        inst.on("click", function(params) {
          if (params.name && params.name !== opsState._userDrillDept) {
            opsState._userDrillDept = params.name;
          } else {
            opsState._userDrillDept = null;
          }
          render();
        });
      }
      if (key === "ops-dept-agent-token") {
        inst.on("click", function(params) {
          // 仅父部门可下钻；重复点击同一部门时返回全部
          if (!params.name || !opsDeptChildren(params.name).length) return;
          opsState._drillDept = opsState._drillDept === params.name ? null : params.name;
          render();
        });
      }
    } catch (e) {}
  });
}


function renderPage(page) {
  if (page.kind === "frontChat") return renderFrontChatPage();
  if (page.kind === "home") return renderHome(page);
  if (page.kind === "opsOverview") return renderOpsOverview();
  if (state.path === "/manage/management") return renderDocManagementPage(page);
  if (page.kind === "splitTable") return renderSplitTablePage(page);
  if (page.kind === "cards") return renderCardsPage(page);
  if (page.kind === "systemUsers") return renderSystemUsersPage(page);
  if (page.kind === "dataCenter") return renderDataCenterPage(page);
  return renderTablePage(page);
}

function renderHome(page) {
  return `
    <section class="home-panel">
      <div class="home-blob blob-top-center"></div>
      <div class="home-blob blob-top-left"></div>
      <div class="home-blob blob-bottom-left"></div>
      <div class="home-blob blob-bottom-center"></div>
      <div class="home-blob blob-right-middle"></div>
      <div class="home-blob blob-bottom-right"></div>
      <div class="home-glass">
        <div class="home-copy">
          <h1 class="home-title">👋 Hi，欢迎来到万卷</h1>
          <p class="home-desc">企业级智能问答系统，整合企业内部知识资源，利用GLM大模型技术，有效理解各种查询需求，并提供相应答案。万卷有助于减少对人工客服的依赖，提高信息检索的效率和质量，同时降低企业的运营及信息获取成本，助力企业高效运营。</p>
        </div>
        <div class="home-stage">
          <div class="home-stage-glow glow-left"></div>
          <div class="home-stage-glow glow-right"></div>
          <div class="home-hero-art">
            <img src="./assets/home-center-art-source.png" alt="万卷首页装饰图" />
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderPills(page) {
  if (!page.pills) return "";
  const active = state.pageViews[state.path] || page.pills[0];
  return `
    <div class="subtabs">
      ${page.pills.map((pill) => `<button class="subtab ${pill === active ? "active" : ""}" data-handler="${registerHandler({ type: "pill", path: state.path, value: pill })}">${pill}</button>`).join("")}
    </div>
  `;
}

function renderFilters(filters) {
  return renderFilterBar(filters);
}

function resolvePageView(page) {
  if (!page.views) return page;
  const active = state.pageViews[state.path] || page.pills?.[0];
  return active && page.views[active] ? { ...page, ...page.views[active] } : page;
}

function renderFilterBar(filters = [], actionButtons = []) {
  const page = currentPage();
  const controls = filters.filter((item) => item.kind !== "button");
  const filterButtons = filters.filter((item) => item.kind === "button");
  const trailingButtons = [...filterButtons, ...actionButtons];
  const leftButtons = trailingButtons.filter((item) => item.intent === "reset");
  const rightButtons = trailingButtons.filter((item) => item.intent !== "reset");
  const { visibleControls, hiddenControls } = resolveVisibleFilters(controls, leftButtons, rightButtons, page);
  const popoverKey = `${state.path}:${state.pageViews[state.path] || ""}:filters`;
  const showPopover = hiddenControls.length > 0 && state.filterMenuKey === popoverKey;
  const scopeKey = currentScopeKey();
  const selectedCount = hiddenControls.reduce((total, item) => total + (filterHasValue(item, scopeKey) ? 1 : 0), 0);

  return `
    <div class="filters ${rightButtons.length > 0 ? "right-actions" : ""}">
      <div class="filter-left">
        ${visibleControls.map((item) => renderFilterItem(item)).join("")}
        ${hiddenControls.length > 0 ? `
          <div class="more-filter-wrap ${showPopover ? "open" : ""}">
            <button class="btn icon-only more-filter-btn ${showPopover ? "active" : ""}" data-handler="${registerHandler({ type: "toggleMoreFilters", key: popoverKey })}">
              ${icon("filter")}
              ${selectedCount > 0 ? `<span class="more-filter-count">${selectedCount}</span>` : ""}
            </button>
            ${showPopover ? `
              <div class="more-filter-panel">
                ${hiddenControls.map((item) => `<div class="filter-popover-item">${renderFilterItem(item, true)}</div>`).join("")}
              </div>
            ` : ""}
          </div>
        ` : ""}
        ${leftButtons.map((item) => renderFilterItem(item)).join("")}
      </div>
      ${rightButtons.length > 0 ? `<div class="filter-right">${rightButtons.map((item) => renderFilterItem(item)).join("")}</div>` : ""}
    </div>
  `;
}

function renderFilterItem(item, inPopover = false) {
  const scopeKey = currentScopeKey();
  const controlKey = `${scopeKey}:${item.id}`;
  const widthStyle = item.width ? ` style="width:${item.width}px"` : "";
  const popoverClass = inPopover ? " in-popover" : "";
  if (item.kind === "field") {
    const value = getFilterState(item, scopeKey);
    return `<label class="field${popoverClass}${value ? " filled" : ""}"${widthStyle}><input data-filter-input="${scopeKey}|${item.id}" value="${escapeHtml(value)}" placeholder="${item.placeholder}" /><span class="filter-icon-end">${icon("filterSearch", "wj-icon filter-inline-icon")}</span></label>`;
  }
  if (item.kind === "select") {
    const value = getFilterState(item, scopeKey);
    const open = state.filterControlKey === controlKey;
    return `
      <div class="filter-control-wrap${open ? " open" : ""}"${widthStyle}>
        <button class="select-field${popoverClass}${value ? " filled" : ""}" data-handler="${registerHandler({ type: "toggleFilterControl", key: controlKey })}">
          <span>${escapeHtml(value || item.label)}</span>
          <span class="filter-icon-end">${icon("filterChevron", "wj-icon filter-inline-icon")}</span>
        </button>
        ${open ? `
          <div class="filter-dropdown-panel">
            ${item.options.map((option) => `
              <button class="filter-option${option === value ? " active" : ""}" data-handler="${registerHandler({ type: "setSelectValue", key: controlKey, itemId: item.id, scopeKey, value: option === "全部" ? "" : option })}">
                ${escapeHtml(option)}
              </button>
            `).join("")}
          </div>
        ` : ""}
      </div>
    `;
  }
  if (item.kind === "date") {
    const value = displayDateValue(item, scopeKey);
    const dateState = getDateRangeState(item, scopeKey);
    const open = state.filterControlKey === controlKey;
    return `
      <div class="filter-control-wrap${open ? " open" : ""}"${widthStyle}>
        <button class="date-field${popoverClass}${value.filled ? " filled" : ""}" data-handler="${registerHandler({ type: "toggleFilterControl", key: controlKey })}">
          <span class="date-text">${escapeHtml(value.start)}</span>
          <span class="to">-</span>
          <span class="date-text">${escapeHtml(value.end)}</span>
          <span class="filter-icon-end">${icon("filterCalendar", "wj-icon filter-inline-icon")}</span>
        </button>
        ${open ? `
          <div class="filter-date-panel">
            <div class="calendar-head">
              <div class="calendar-nav left">
                <button class="calendar-nav-btn double" data-handler="${registerHandler({ type: "shiftDateAnchor", itemId: item.id, scopeKey, delta: -12 })}">
                  ${icon("calendarPrev", "wj-icon calendar-nav-icon")}${icon("calendarPrev", "wj-icon calendar-nav-icon")}
                </button>
                <button class="calendar-nav-btn" data-handler="${registerHandler({ type: "shiftDateAnchor", itemId: item.id, scopeKey, delta: -1 })}">
                  ${icon("calendarPrev", "wj-icon calendar-nav-icon")}
                </button>
              </div>
              <div class="calendar-head-spacer"></div>
              <div class="calendar-nav right">
                <button class="calendar-nav-btn" data-handler="${registerHandler({ type: "shiftDateAnchor", itemId: item.id, scopeKey, delta: 1 })}">
                  ${icon("calendarPrev", "wj-icon calendar-nav-icon next")}
                </button>
                <button class="calendar-nav-btn double" data-handler="${registerHandler({ type: "shiftDateAnchor", itemId: item.id, scopeKey, delta: 12 })}">
                  ${icon("calendarPrev", "wj-icon calendar-nav-icon next")}${icon("calendarPrev", "wj-icon calendar-nav-icon next")}
                </button>
              </div>
            </div>
            <div class="calendar-range-panel">
              ${renderCalendarMonth(dateState.anchor, item, scopeKey)}
              ${renderCalendarMonth(addMonthsIso(dateState.anchor, 1), item, scopeKey)}
            </div>
          </div>
        ` : ""}
      </div>
    `;
  }
  const cls = [
    "btn",
    item.intent === "disabled" ? "disabled" : "",
    item.style === "primary" ? "primary" : "",
    item.intent === "reset" ? "is-reset" : "",
  ].filter(Boolean).join(" ");
  const iconPart = item.icon ? `${icon(item.icon, "btn-inline-icon")}` : "";
  const disabled = item.intent === "disabled" || item.disabled;
  if (item.intent === "reset") {
    return `<button class="${cls}" data-handler="${registerHandler({ type: "resetFilters", scopeKey })}">${iconPart}${item.label}</button>`;
  }
  const handler = item.handler || drawerMeta(item.label);
  return `<button class="${cls}" ${disabled ? "disabled" : `data-handler="${registerHandler(handler)}"`}>${iconPart}${item.label}</button>`;
}

function filterHasValue(item, scopeKey = currentScopeKey()) {
  const value = getFilterState(item, scopeKey);
  if (item.kind === "date") return Boolean(value?.start || value?.end);
  return Boolean(value);
}

function resolveVisibleFilters(controls, leftButtons, rightButtons, page) {
  const visibleControls = [...controls];
  const hiddenControls = [];
  const hostWidth = getFilterHostWidth(page);
  const leftBudget = getFilterLeftBudget(page, rightButtons, hostWidth);
  const leftButtonWidth = stackWidth(leftButtons);
  const forceHide = forcedHiddenCount(page, hostWidth, controls.length);

  while (hiddenControls.length < forceHide && visibleControls.length > 1) {
    hiddenControls.unshift(visibleControls.pop());
  }

  while (
    visibleControls.length > 1 &&
    stackWidth(visibleControls) + leftButtonWidth + (hiddenControls.length > 0 ? 44 : 0) > leftBudget
  ) {
    hiddenControls.unshift(visibleControls.pop());
  }

  return { visibleControls, hiddenControls };
}

function getFilterLeftBudget(page, rightButtons, hostWidth = getFilterHostWidth(page)) {
  let width = hostWidth;
  width -= 32;
  if (rightButtons.length > 0) {
    width -= stackWidth(rightButtons) + 24;
  }
  if (state.path === "/manage/management") {
    width += 360;
  }
  return Math.max(width, 320);
}

function forcedHiddenCount(page, hostWidth, maxControls) {
  let count = 0;
  if (page.kind === "splitTable" || page.kind === "systemUsers") {
    if (hostWidth <= 880) count = 2;
    else if (hostWidth <= 1080) count = 1;
  } else {
    if (hostWidth <= 930) count = 2;
    else if (hostWidth <= 1130) count = 1;
  }
  return Math.min(count, Math.max(0, maxControls - 1));
}

function getFilterHostWidth(page) {
  const main = document.querySelector(".main");
  if (main) {
    if (page.kind === "splitTable" || page.kind === "systemUsers") {
      return Math.max(main.clientWidth - 166 - 16 - 32, 320);
    }
    return Math.max(main.clientWidth - 20, 320);
  }
  const selector = page.kind === "splitTable" || page.kind === "systemUsers" ? ".inner-main" : ".page-panel";
  const host = document.querySelector(selector);
  if (host) return host.clientWidth;
  return window.innerWidth - 224 - 20;
}

function stackWidth(items) {
  if (!items.length) return 0;
  return items.reduce((total, item) => total + filterItemWidth(item), 0) + (items.length - 1) * 12;
}

function filterItemWidth(item) {
  if (item.kind === "field" || item.kind === "select" || item.kind === "date") return item.width || 190;
  if (item.kind === "button") {
    const text = (item.label || "").replace(/\s+/g, "");
    const base = item.style === "primary" ? 44 : 24;
    return Math.max(64, text.length * 14 + base);
  }
  return 0;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function renderTablePage(page) {
  const view = resolvePageView(page);
  return `
    <section class="page-panel padded">
      ${renderPills(page)}
      ${view.filters ? renderFilterBar(view.filters, view.actionButtons || []) : ""}
      ${renderTable(view.columns, view.rows)}
      ${renderPager(view.pagination)}
    </section>
  `;
}

function renderSplitTablePage(page) {
  const listIcon = page.title === "FAQ管理" ? "file" : page.title === "文档管理" ? "file" : "folder";
  return `
    <section class="split-page">
      <aside class="inner-side">
        <label class="side-search"><input placeholder="${page.sideSearch}" />${icon("search")}</label>
        <div class="side-list">
          ${page.sideItems.map((item) => `<div class="side-list-item ${item === page.sideActive ? "active" : ""}">${icon(listIcon)}<span class="ellipsis">${item}</span></div>`).join("")}
        </div>
      </aside>
      <div class="inner-main">
        ${page.headerText ? `<div class="section-title-row"><div class="section-title">${page.headerText}</div><div class="filter-right">${(page.headerButtons || []).map(renderFilterItem).join("")}</div></div>` : ""}
        ${renderFilters(page.filters)}
        ${renderTable(page.columns, page.rows)}
        ${renderPager(page.pagination)}
      </div>
    </section>
  `;
}

function renderDocManagementPage(page) {
  if (state.docManagement.uploadView) return renderDocUploadPage();
  if (state.docManagement.configView) return renderDocConfigPage();
  if (state.docManagement.sliceView) return renderDocSlicePage();
  const treeQuery = state.docManagement.treeQuery.trim();
  const visibleTree = filterDocTreeNodes(DOC_MANAGEMENT_TREE, treeQuery);
  const treeVariant = "icon3";
  const selectedRows = state.docManagement.selectedRows;
  const multiSelected = selectedRows.size > 1;
  const allSelected = selectedRows.size === DOC_MANAGEMENT_ROWS.length;
  const someSelected = selectedRows.size > 0 && !allSelected;
  const batchButtons = multiSelected
    ? [
        button("批量复制", "open"),
        button("批量修改配置", "open", "", { handler: { type: "openDocConfig", mode: "batch" } }),
        button("批量删除", "open"),
        button("上传文档", "open", "primary", { handler: { type: "openDocUpload" } }),
      ]
    : [
        button("删除", "disabled", "", { disabled: true }),
        button("上传文档", "open", "primary", { handler: { type: "openDocUpload" } }),
      ];
  const rows = DOC_MANAGEMENT_ROWS.map((item) => [
    checkbox({ checked: selectedRows.has(item.id), handler: { type: "toggleDocRow", id: item.id } }),
    item.index,
    docNameCell(item),
    item.slices,
    renderDocStatusCell(item),
    item.labels,
    item.canBatch ? { type: "iconAction", icon: "addSquare", tone: "muted", handler: { type: "drawer", title: "添加标签", fields: [{ label: "标签名称" }] } } : "",
    item.createdAt,
    docRowActions(item),
  ]);

  return `
    <section class="split-page doc-management-page">
      <aside class="inner-side doc-side doc-tree-iconic doc-tree-${treeVariant}">
        <div class="doc-side-search-row">
          <label class="side-search"><input data-doc-tree-search placeholder="搜索知识库 / 目录" value="${escapeHtml(state.docManagement.treeQuery)}" />${icon("filterSearch", "wj-icon filter-inline-icon")}</label>
          <button class="doc-side-add" data-handler="${registerHandler({ type: "drawer", title: "新建知识库分组", fields: [{ label: "分组名称" }] })}">${icon("addSquare", "doc-side-add-icon")}</button>
        </div>
        <div class="doc-tree">
          ${visibleTree.length ? renderDocTreeNodes(visibleTree, 0, !!treeQuery) : `<div class="doc-tree-empty">未找到匹配内容</div>`}
        </div>
      </aside>
      <div class="inner-main doc-main">
        <div class="section-title-row doc-title-row">
          <div class="section-title doc-title">当前知识库：${state.docManagement.activeNode}</div>
          <div class="filter-right">${[
            button("召回测试", "open", "", { icon: "recallTest" }),
            button("接口调用", "open", "", { icon: "apiCall" }),
          ].map(renderFilterItem).join("")}</div>
        </div>
        ${renderFilters([
          { ...field("请输入文档名称"), width: 176 },
          { ...selectField("请选择文档格式"), width: 176 },
          { ...selectField("请选择状态"), width: 176 },
          { ...dateField("创建开始日期", "创建结束日期"), width: 240 },
          button("重 置", "reset"),
          ...batchButtons,
        ])}
        ${renderTable(
          [
            [checkbox({ checked: allSelected, mixed: someSelected, handler: { type: "toggleAllDocRows" } }), "42px"],
            ["编号", "72px"],
            ["文档名称", "380px"],
            ["切片数", "88px"],
            ["状态", "170px"],
            ["标签", "176px"],
            ["", "42px"],
            ["创建时间", "170px"],
            ["操作", "168px"],
          ],
          rows,
        )}
        ${renderPager(pager("20", "10条/页", [1, 2, 3, 4]))}
      </div>
    </section>
  `;
}

function renderDocTreeNodes(nodes, depth = 0, forceOpen = false) {
  const treeVariant = "icon3";
  return nodes.map((node) => {
    const hasChildren = !!node.children?.length;
    const isKnowledge = node.kind === "knowledge" || !hasChildren;
    const open = hasChildren && (forceOpen || state.docManagement.expandedNodes.has(node.label));
    const active = state.docManagement.activeNode === node.label;
    const togglePart = hasChildren
      ? `<button class="doc-tree-toggle" data-handler="${registerHandler({ type: "toggleDocTree", label: node.label })}" aria-label="${open ? "收起" : "展开"}${escapeHtml(node.label)}">${icon("filterChevron", `doc-tree-chevron ${open ? "open" : ""}`)}</button>`
      : `<span class="doc-tree-toggle placeholder"></span>`;
    const nodeClick = isKnowledge
      ? registerHandler({ type: "selectDocTreeNode", label: node.label, hasChildren, kind: "knowledge" })
      : registerHandler({ type: "toggleDocTree", label: node.label });
    const iconName = isKnowledge ? getDocKnowledgeIconName(treeVariant) : getDocDirectoryIconName(treeVariant, open, hasChildren);
    return `
      <div class="doc-tree-branch depth-${depth} ${isKnowledge ? "is-knowledge" : "is-directory"}">
        <div class="doc-tree-row ${active ? "active" : ""} ${open ? "open" : ""} ${isKnowledge ? "knowledge-row" : "directory-row"}" data-handler="${nodeClick}">
          ${togglePart}
          <span class="doc-tree-icon ${isKnowledge ? "knowledge-icon" : "directory-icon"}">${icon(iconName)}</span>
          <span class="doc-tree-name ellipsis">${escapeHtml(node.label)}</span>
        </div>
        ${hasChildren && open ? `<div class="doc-tree-children">${renderDocTreeNodes(node.children, depth + 1, forceOpen)}</div>` : ""}
      </div>
    `;
  }).join("");
}

function getDocTreeVariant() {
  const value = state.docManagement.treeVariant;
  return ["icon1", "icon2", "icon3", "icon4", "icon5"].includes(value) ? value : "icon5";
}

function getDocKnowledgeIconName(variant = getDocTreeVariant()) {
  if (variant === "icon1") return "book";
  if (variant === "icon2") return "treeKnowledge";
  if (variant === "icon3") return "treeFile";
  return "book";
}

function getDocDirectoryIconName(variant = getDocTreeVariant(), open = false, hasChildren = true) {
  if (!hasChildren) return "treeFile";
  return "treeFolder";
}

function findDocTreeNode(label, nodes = DOC_MANAGEMENT_TREE) {
  for (const node of nodes) {
    if (node.label === label) return node;
    const child = node.children ? findDocTreeNode(label, node.children) : null;
    if (child) return child;
  }
  return null;
}

function findDocKnowledgeRoot(label, nodes = DOC_MANAGEMENT_TREE, root = null) {
  for (const node of nodes) {
    const currentRoot = node.kind === "knowledge" || !root ? node : root;
    if (node.label === label) return currentRoot;
    const child = node.children ? findDocKnowledgeRoot(label, node.children, currentRoot) : null;
    if (child) return child;
  }
  return null;
}

function findFirstDocKnowledge(node = null) {
  const nodes = node ? [node] : DOC_MANAGEMENT_TREE;
  for (const item of nodes) {
    if (item.kind === "knowledge" || !item.children?.length) return item;
    const child = item.children ? findFirstDocKnowledgeInNodes(item.children) : null;
    if (child) return child;
  }
  return null;
}

function findFirstDocKnowledgeInNodes(nodes) {
  for (const item of nodes) {
    if (item.kind === "knowledge" || !item.children?.length) return item;
    const child = item.children ? findFirstDocKnowledgeInNodes(item.children) : null;
    if (child) return child;
  }
  return null;
}

function countDocDirectories(node) {
  if (!node?.children?.length) return 0;
  return node.children.reduce((sum, child) => sum + 1 + countDocDirectories(child), 0);
}

function countDocRowsForNode(node) {
  if (!node?.children?.length) return node?.docs || 0;
  return node.children.reduce((sum, child) => sum + countDocRowsForNode(child), node.docs || 0);
}

function countDocKnowledgeNodes(node) {
  if (!node?.children?.length || node.kind === "knowledge") return 1;
  return node.children.reduce((sum, child) => sum + countDocKnowledgeNodes(child), 0);
}

function filterDocTreeNodes(nodes, query) {
  if (!query) return nodes;
  const normalized = query.toLowerCase();
  return nodes.reduce((result, node) => {
    const children = node.children ? filterDocTreeNodes(node.children, query) : [];
    const matched = node.label.toLowerCase().includes(normalized);
    if (matched || children.length) result.push({ ...node, children });
    return result;
  }, []);
}

function docNameCell(item) {
  return `
    <div class="doc-name-cell">
      <span class="doc-format-badge ${item.format.toLowerCase()}">${item.format.slice(0, 1)}</span>
      <span class="ellipsis">${item.name}</span>
    </div>
  `;
}

function renderDocStatusCell(item) {
  return { type: "docStatus", item };
}

function isSpreadsheetFormat(format) {
  return ["XLSX", "XLS", "CSV"].includes(String(format || "").toUpperCase());
}

function isPresentationFormat(format) {
  return ["PPTX", "PPT"].includes(String(format || "").toUpperCase());
}

function sliceModeForDoc(doc) {
  if (isSpreadsheetFormat(doc?.format)) return "excel";
  if (isPresentationFormat(doc?.format)) return "ppt";
  return "text";
}

function openDocSliceView(id) {
  const doc = DOC_MANAGEMENT_ROWS.find((item) => item.id === id);
  state.docManagement.rowMenu = "";
  state.docManagement.sliceView = {
    docId: id,
    activeSlice: sliceModeForDoc(doc) === "text" ? 4 : 1,
    editing: false,
    imageViewer: "",
    drawerImageViewer: "",
    keywordEditor: false,
  };
  state.resetMainScroll = true;
  render();
}

function activeSliceDoc() {
  const view = state.docManagement.sliceView;
  return DOC_MANAGEMENT_ROWS.find((item) => item.id === view?.docId) || DOC_MANAGEMENT_ROWS.find((item) => item.ops === "done");
}

function sampleImageThumb(kind = "landscape") {
  const assets = {
    landscape: "slice-thumb-1.jpg",
    zoom: "slice-thumb-2.jpg",
    water: "slice-thumb-3.jpg",
  };
  if (assets[kind]) {
    return `<img class="slice-raster-thumb" src="./assets/${assets[kind]}" alt="" />`;
  }
  return `<span class="slice-thumb-art ${kind}"><span></span></span>`;
}

function getDocSliceItems(doc) {
  const mode = sliceModeForDoc(doc);
  if (mode === "excel") {
    return [
      {
        id: 1,
        title: "切片1",
        meta: "Sheet：项目总览 · 第 2-18 行",
        status: "已启用",
        summary: "文件：2026储能项目经营数据表.xlsx。Sheet：项目总览。字段包括项目名称、区域、负责人、状态、预计上线时间、Q1收入、Q2收入、增长率。",
        excelRows: [
          ["项目名称", "区域", "负责人", "状态", "Q1收入", "增长率"],
          ["华东储能站", "华东", "李文", "进行中", "1280万", "12.4%"],
          ["西南调峰项目", "西南", "周宁", "延期", "860万", "-3.1%"],
        ],
        excelImages: [
          {
            kind: "diagram",
            title: "项目延期风险流程图",
            source: "Sheet：项目总览 / 锚点：H6:K14 / 附近行：第 6-14 行",
            ocr: "并网验收、风险复核、负责人确认、上线延期",
            summary: "图片展示西南调峰项目的延期原因和验收节点，召回时会与同 Sheet 的项目状态、预计上线时间一起命中。",
          },
        ],
        tags: ["Sheet:项目总览", "行2-18", "公式结果"],
      },
      {
        id: 2,
        title: "切片2",
        meta: "Sheet：销售明细 · 第 19-36 行",
        status: "已启用",
        summary: "产品=A100储能柜，区域=华东，渠道=直营，Q1销售额=100万，Q2销售额=128万，增长率=28%。公式：增长率=(Q2-Q1)/Q1。",
        excelRows: [
          ["产品", "区域", "渠道", "Q1销售额", "Q2销售额", "增长率"],
          ["A100储能柜", "华东", "直营", "100万", "128万", "28%"],
          ["B200电池包", "华南", "代理", "82万", "96万", "17.1%"],
        ],
        tags: ["销售明细", "结构化字段", "可统计"],
      },
      {
        id: 3,
        title: "切片3",
        meta: "Sheet：风险备注 · 第 4-12 行",
        status: "已启用",
        summary: "该切片包含批注内容：西南调峰项目因并网验收延期，预计上线时间从 2026-06 调整到 2026-08。隐藏列“风险等级”已解析为高。",
        excelRows: [
          ["项目", "风险等级", "批注", "预计上线"],
          ["西南调峰项目", "高", "并网验收延期", "2026-08"],
          ["海外储能样板", "中", "汇率波动需复核", "2026-07"],
        ],
        excelImages: [
          {
            kind: "deck",
            title: "风险备注截图",
            source: "Sheet：风险备注 / 锚点：E4:G10 / 附近行：第 4-12 行",
            ocr: "高风险、验收延期、责任人周宁、上线调整至 2026-08",
            summary: "该截图来自工作表内嵌图片，系统保留原图并抽取 OCR 文本，用于补充批注和隐藏列信息。",
          },
        ],
        tags: ["批注", "隐藏列", "风险"],
      },
    ];
  }
  if (mode === "ppt") {
    return [
      {
        id: 1,
        title: "切片1",
        meta: "Slide 1 · 封面",
        status: "已启用",
        summary: "储能产品路演材料。页面标题：全场景储能解决方案。OCR 识别：安全、高效、可扩展。备注：本页用于建立产品定位。",
        tags: ["Slide 1", "OCR", "封面"],
        imageKind: "slide",
      },
      {
        id: 2,
        title: "切片2",
        meta: "Slide 5 · 产品核心优势",
        status: "已启用",
        summary: "产品核心优势包括成本更低、部署更快、支持私有化和智能调度。备注强调差异化能力，图表显示客户续费率从 72% 提升到 86%。",
        tags: ["Slide 5", "图表数据", "备注"],
        chart: ["续费率 72% → 86%", "部署周期 21 天 → 12 天", "运维成本 -18%"],
        imageKind: "deck",
      },
      {
        id: 3,
        title: "切片3",
        meta: "Slide 8 · 私有化部署流程",
        status: "已启用",
        summary: "页面包含流程图：需求评估、环境准备、节点部署、模型接入、验收上线。图片 OCR 已抽取流程节点，可用于问答召回。",
        tags: ["Slide 8", "流程图", "图片OCR"],
        imageKind: "diagram",
      },
    ];
  }
  return [
    {
      id: 1,
      title: "切片1",
      meta: "2109字符",
      status: "已启用",
      summary: "防晒霜、防晒服or帽子，女孩必带（高原紫外线较强，我冬天回家过年，朋友都说我被晒黑，你信吗）记得带身份证 学生证 教师军人等，很多景点对60岁以上，特殊人群都有优惠政策 最后，带上钱和轻松愉悦的心情，少看负面新闻听腻自己，少贪便宜来坑自己，出游是为了找快乐，不是找罪受。",
      tags: ["高原", "防晒", "旅行"],
    },
    {
      id: 2,
      title: "切片2",
      meta: "2109字符",
      status: "已启用",
      summary: "防晒霜、防晒服or帽子，女孩必带（高原紫外线较强，我冬天回家过年，朋友都说我被晒黑，你信吗）记得带身份证 学生证 教师军人等，很多景点对60岁以上，特殊人群都有优惠政策 最后，带上钱和轻松愉悦的心情。",
      images: ["landscape", "zoom", "water"],
      tags: ["证件", "出行", "优惠"],
    },
    {
      id: 3,
      title: "切片3",
      meta: "2109字符",
      status: "已启用",
      summary: "防晒霜、防晒服or帽子，女孩必带（高原紫外线较强，我冬天回家过年，朋友都说我被晒黑，你信吗）记得带身份证 学生证 教师军人等，很多景点对60岁以上，特殊人群都有优惠政策。",
      tags: ["身份证", "学生证"],
    },
    {
      id: 4,
      title: "切片4",
      meta: "2109字符",
      status: "已启用",
      summary: "防晒霜、防晒服or帽子，女孩必带（高原紫外线较强，我冬天回家过年，朋友都说我被晒黑，你信吗）记得带身份证 学生证 教师军人等，很多景点对60岁以上，特殊人群都有优惠政策 最后，带上钱和轻松愉悦的心情，少看负面新闻听腻自己，少看细致攻略折磨自己，少贪便宜来坑自己，出游是为了找快乐，不是找罪受。",
      tags: ["美国制裁", "俄罗斯", "出游"],
    },
    {
      id: 5,
      title: "切片5",
      meta: "2109字符",
      status: "已启用",
      summary: "防晒霜、防晒服or帽子，女孩必带（高原紫外线较强，我冬天回家过年，朋友都说我被晒黑，你信吗）记得带身份证 学生证 教师军人等，很多景点对60岁以上，特殊人群都有优惠政策 最后，带上钱和轻松愉悦的心情。",
      tags: ["旅行", "提醒"],
    },
  ];
}

function renderDocSlicePage() {
  const doc = activeSliceDoc();
  if (!doc) return "";
  const view = state.docManagement.sliceView;
  const mode = sliceModeForDoc(doc);
  const slices = getDocSliceItems(doc);
  const activeSlice = slices.find((item) => item.id === view.activeSlice) || slices[0];
  return `
    <section class="doc-slice-page ${mode}">
      <div class="doc-slice-card">
        <div class="doc-slice-titlebar">
          <button class="doc-slice-back" data-handler="${registerHandler({ type: "closeDocSlices" })}" aria-label="返回文档管理">${icon("chevron", "doc-slice-back-icon")}</button>
          <span class="ellipsis">${escapeHtml(doc.name.replace(/\.[^.]+$/, ""))}</span>
        </div>
        <div class="doc-slice-content">
          <section class="doc-source-panel">
            <div class="slice-panel-head">
              <span>原始文档预览</span>
              <span class="slice-zoom">－ 100% ＋</span>
            </div>
            ${renderDocSourcePreview(doc, activeSlice)}
          </section>
          <section class="doc-segment-panel">
            <div class="slice-panel-head right">
              <label class="slice-head-check">${renderCell(checkbox({}))}<span>切片 ${slices.length} 个</span></label>
              <div class="slice-head-actions">
                <button disabled>批量启用</button>
                <button disabled>批量禁用</button>
                <button>请选择 ${icon("filterChevron", "slice-select-icon")}</button>
                <label><input placeholder="请选择任务执行人" />${icon("filterSearch", "slice-search-icon")}</label>
              </div>
            </div>
            <div class="doc-slice-list">
              ${slices.map((slice) => renderSliceListCard(slice, mode, view.activeSlice === slice.id)).join("")}
            </div>
            ${renderPager(pager("20", "10条/页", [1, 2, 3, 4]))}
          </section>
        </div>
      </div>
      ${view.imageViewer ? renderSliceImageViewer(view.imageViewer) : ""}
      ${view.editing ? renderSliceEditDrawer(doc, activeSlice, view) : ""}
    </section>
  `;
}

function renderDocSourcePreview(doc, activeSlice) {
  const mode = sliceModeForDoc(doc);
  if (mode === "excel") {
    return `
      <div class="doc-source-canvas excel">
        <div class="excel-sheet-tabs"><span class="active">项目总览</span><span>销售明细</span><span>风险备注</span></div>
        <div class="excel-grid-preview">
          ${["A", "B", "C", "D", "E", "F"].map((head) => `<b>${head}</b>`).join("")}
          ${activeSlice.excelRows.map((row) => row.map((cell) => `<span>${escapeHtml(cell)}</span>`).join("")).join("")}
          ${Array.from({ length: 24 }, (_, index) => `<span class="${index % 6 === 0 ? "row-head" : ""}">${index % 6 === 0 ? index / 6 + 4 : ""}</span>`).join("")}
        </div>
        ${activeSlice.excelImages?.length ? renderExcelSourceImages(activeSlice) : ""}
      </div>
    `;
  }
  if (mode === "ppt") {
    return `
      <div class="doc-source-canvas ppt">
        <div class="ppt-preview-slide">
          <div class="ppt-sidebar-preview"></div>
          <div class="ppt-slide-main">
            <span class="ppt-kicker">ENERGY STORAGE</span>
            <h3>${escapeHtml(activeSlice.title.replace(/^切片\d+\s*/, ""))}</h3>
            <p>${escapeHtml(activeSlice.summary.slice(0, 78))}...</p>
            <div class="ppt-chart-bars"><span></span><span></span><span></span><span></span></div>
          </div>
        </div>
      </div>
    `;
  }
  return `
    <div class="doc-source-canvas paper">
      <div class="paper-doc">
        <div class="paper-header-line"><span>应用 支撑基础平台项目</span><em>【UI设计说明书】</em></div>
        <h3>版本说明</h3>
        <div class="paper-doc-table">
          ${["版本/状态", "作者", "参与者", "日期 日期", "起止 日期", "备注", "V1.0", "杨文逸", "大大", "翟晓晓", "2020.12.24", "起草"].map((item) => `<span>${item}</span>`).join("")}
          ${Array.from({ length: 30 }, () => "<span></span>").join("")}
        </div>
      </div>
    </div>
  `;
}

function renderExcelSourceImages(slice) {
  return `
    <div class="excel-source-images">
      ${slice.excelImages.map((item) => `
        <div class="excel-source-image">
          <span class="excel-source-anchor">图片对象 · ${escapeHtml(item.source.split(" / ")[1] || "Sheet锚点")}</span>
          <div class="excel-source-picture">${sampleImageThumb(item.kind || "diagram")}</div>
          <p>${escapeHtml(item.title)}</p>
        </div>
      `).join("")}
    </div>
  `;
}

function renderSliceListCard(slice, mode, active) {
  const enriched = mode === "excel" ? renderExcelSliceDetail(slice) : mode === "ppt" ? renderPptSliceDetail(slice) : renderTextSliceDetail(slice);
  return `
    <article class="doc-slice-item ${active ? "active" : ""} ${mode}" data-handler="${registerHandler({ type: "selectDocSlice", id: slice.id })}">
      <div class="slice-item-top">
        <label>${renderCell(checkbox({}))}<strong>${escapeHtml(slice.title)}</strong><em>${escapeHtml(slice.meta)}</em></label>
        <span class="slice-enabled"><i></i>${escapeHtml(slice.status)}</span>
      </div>
      <p>${escapeHtml(slice.summary)}</p>
      ${enriched}
      ${active ? `
        <div class="slice-hover-actions">
          <button data-handler="${registerHandler({ type: "editDocSlice", id: slice.id })}">${icon("rowMore", "slice-action-icon")} 编辑</button>
          <button data-handler="${registerHandler({ type: "noop" })}">${icon("fullscreen", "slice-action-icon")} 展开</button>
          <button class="doc-op-switch on" data-handler="${registerHandler({ type: "noop" })}" aria-label="启用切片"><span class="doc-op-switch-knob"></span></button>
        </div>
      ` : ""}
    </article>
  `;
}

function renderTextSliceDetail(slice) {
  if (!slice.images?.length) return "";
  return `
    <div class="slice-image-strip">
      ${slice.images.map((kind, index) => `
        <button class="slice-image-thumb" data-handler="${registerHandler({ type: "openSliceImage", image: kind })}" aria-label="查看图片${index + 1}">
          ${sampleImageThumb(kind)}
          ${index === 1 ? `<span class="slice-thumb-mask">${icon("search", "slice-thumb-search")}</span>` : ""}
        </button>
      `).join("")}
    </div>
  `;
}

function renderExcelSliceDetail(slice) {
  return `
    <div class="excel-slice-table">
      ${slice.excelRows.map((row, index) => row.map((cell) => `<span class="${index === 0 ? "head" : ""}">${escapeHtml(cell)}</span>`).join("")).join("")}
    </div>
    ${renderExcelImageExtraction(slice)}
    <div class="slice-tag-row">${slice.tags.map((tagText) => `<span>${escapeHtml(tagText)}</span>`).join("")}</div>
  `;
}

function renderExcelImageExtraction(slice) {
  if (!slice.excelImages?.length) return "";
  return `
    <div class="excel-image-extract">
      <div class="excel-image-title">图片提取 <em>${slice.excelImages.length} 张</em></div>
      ${slice.excelImages.map((item, index) => `
        <div class="excel-image-row">
          <button class="excel-image-thumb" data-handler="${registerHandler({ type: "openSliceImage", image: item.kind || "diagram" })}" aria-label="查看Excel图片${index + 1}">
            ${sampleImageThumb(item.kind || "diagram")}
            <span>查看原图</span>
          </button>
          <div class="excel-image-meta">
            <strong>${escapeHtml(item.title)}</strong>
            <em>${escapeHtml(item.source)}</em>
            <p><b>OCR：</b>${escapeHtml(item.ocr)}</p>
            <p><b>摘要：</b>${escapeHtml(item.summary)}</p>
            <div class="excel-image-fields">
              <span>图片OCR</span>
              <span>Sheet锚点</span>
              <span>附近行关联</span>
            </div>
          </div>
        </div>
      `).join("")}
    </div>
  `;
}

function renderPptSliceDetail(slice) {
  return `
    <div class="ppt-slice-detail">
      <button class="ppt-thumb" data-handler="${registerHandler({ type: "openSliceImage", image: slice.imageKind || "slide" })}">${sampleImageThumb(slice.imageKind || "slide")}</button>
      <div>
        ${slice.chart ? `<div class="ppt-chart-list">${slice.chart.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}</div>` : ""}
        <div class="slice-tag-row">${slice.tags.map((tagText) => `<span>${escapeHtml(tagText)}</span>`).join("")}</div>
      </div>
    </div>
  `;
}

function renderSliceImageViewer(imageKind) {
  return `
    <div class="slice-lightbox" data-handler="${registerHandler({ type: "closeSliceImage" })}">
      <div class="slice-lightbox-image" role="dialog" aria-label="查看图片">
        <img src="./assets/slice-mountain-view.jpg" alt="" />
      </div>
    </div>
  `;
}

function renderSliceEditDrawer(doc, slice, view) {
  const mode = sliceModeForDoc(doc);
  const keywords = slice.tags?.length ? slice.tags : [];
  const imageRows = editDrawerImageRows(doc, slice, mode);
  return `
    <div class="slice-edit-backdrop"></div>
    <aside class="slice-edit-drawer">
      <div class="slice-edit-head"><strong>编辑切片</strong><button data-handler="${registerHandler({ type: "closeEditSlice" })}" aria-label="关闭">${icon("close", "slice-close-icon")}</button></div>
      <div class="slice-edit-body">
        <label class="slice-edit-field">
          <span>切片</span>
          <textarea rows="9">${escapeHtml(editDrawerSliceText(doc, slice, mode))}</textarea>
        </label>
        <div class="slice-edit-block">
          <span class="slice-edit-label">关键词</span>
          <div class="edit-keyword-list">
            ${keywords.map((item) => `<span>${escapeHtml(item)} <button data-handler="${registerHandler({ type: "noop" })}">×</button></span>`).join("")}
          </div>
          <button class="add-keyword-btn" data-handler="${registerHandler({ type: "openKeywordEditor" })}">＋ 添加关键词</button>
        </div>
        <label class="slice-edit-field">
          <span>内容总结</span>
          <textarea rows="9">${escapeHtml(editDrawerSummaryText(slice, mode))}</textarea>
        </label>
        ${imageRows.length ? `<div class="slice-edit-block">
          <span class="slice-edit-label">图片提取</span>
          <div class="edit-image-list">
            ${imageRows.map((item) => `
              <div class="edit-image-row">
                <button class="edit-image-thumb" data-handler="${registerHandler({ type: "openDrawerImagePreview", image: item.image })}">
                  ${sampleImageThumb(item.image)}
                  <span>查看原图</span>
                </button>
                <textarea rows="4">${escapeHtml(`${item.title}\n${item.text}`)}</textarea>
              </div>
            `).join("")}
          </div>
        </div>` : ""}
      </div>
      <div class="slice-edit-foot">
        <button data-handler="${registerHandler({ type: "closeEditSlice" })}">取消</button>
        <button class="primary" data-handler="${registerHandler({ type: "closeEditSlice" })}">保存</button>
      </div>
    </aside>
    ${view.drawerImageViewer ? renderDrawerImageFocus(view.drawerImageViewer) : ""}
    ${view.keywordEditor ? renderKeywordEditor(keywords) : ""}
  `;
}

function editDrawerSliceText(doc, slice, mode) {
  const lines = [
    doc.name,
    `${slice.title} ${slice.meta}`,
    slice.summary,
  ];
  if (mode === "excel") {
    lines.push(
      "表格内容",
      ...slice.excelRows.map((row) => row.join(" / ")),
    );
    if (slice.excelImages?.length) {
      lines.push(
        "图片提取",
        ...slice.excelImages.map((item) => `${item.title}：${item.ocr}`),
      );
    }
  }
  if (mode === "ppt") {
    if (slice.chart?.length) lines.push("图表数据", ...slice.chart);
    lines.push(`页面标签：${(slice.tags || []).join("、")}`);
  }
  return lines.filter(Boolean).join("\n");
}

function editDrawerSummaryText(slice, mode) {
  if (mode === "excel") {
    const imageNote = slice.excelImages?.length ? `\n图片摘要：${slice.excelImages.map((item) => item.summary).join("；")}` : "";
    return `${slice.summary}${imageNote}`;
  }
  if (mode === "ppt") {
    const chartNote = slice.chart?.length ? `\n图表摘要：${slice.chart.join("；")}` : "";
    return `${slice.summary}${chartNote}`;
  }
  return slice.summary;
}

function editDrawerImageRows(doc, slice, mode) {
  if (mode === "excel") {
    return (slice.excelImages || []).map((item) => ({
      image: item.kind || "diagram",
      title: item.title,
      text: `${item.source}\nOCR：${item.ocr}\n摘要：${item.summary}`,
    }));
  }
  if (mode === "ppt") {
    return [{
      image: slice.imageKind || "slide",
      title: `${doc.name} ${slice.meta}`,
      text: `${slice.summary}${slice.chart?.length ? `\n图表数据：${slice.chart.join("；")}` : ""}`,
    }];
  }
  return (slice.images || []).map((image, index) => ({
    image,
    title: `${doc.name} ${slice.title} 图片${index + 1}`,
    text: `${slice.summary}\n标签：${(slice.tags || []).join("、")}`,
  }));
}

function renderDrawerImageFocus(imageKind) {
  return `
    <div class="drawer-image-focus" data-handler="${registerHandler({ type: "closeDrawerImagePreview" })}">
      <div class="drawer-image-card"><img src="./assets/slice-drawer-image-large.jpg" alt="" /></div>
    </div>
  `;
}

function renderKeywordEditor(keywords = []) {
  const tags = keywords.length ? keywords : ["关键词"];
  return `
    <div class="keyword-editor-pop" role="dialog" aria-label="编辑关键词">
      <strong>关键词</strong>
      <div class="keyword-editor-tags">
        ${tags.map((item) => `<span>${escapeHtml(item)} <button data-handler="${registerHandler({ type: "noop" })}">×</button></span>`).join("")}
        <input />
      </div>
      <p>输入完后回车，即可创建关键词，点击空白区域退出关键词编辑模式</p>
    </div>
  `;
}

function docStatusMeta(doc) {
  if (doc.ops === "queued") {
    return {
      tone: "queued",
      label: "排队中",
      detail: `队列第 ${doc.queuePosition || 1} 位 / 共 ${doc.queueTotal || 1} 位`,
    };
  }
  if (doc.ops === "parsing" || doc.ops === "enhancing") {
    const label = doc.ops === "parsing" ? "文件解析中" : "文件增强中";
    return {
      tone: doc.ops,
      label: `${label} | ${doc.progress || 0}%`,
      detail: label,
    };
  }
  if (doc.ops === "failed") {
    return {
      tone: "failed",
      label: "处理失败",
      detail: "未生成可用切片",
    };
  }
  return {
    tone: "done",
    label: "处理完成",
    detail: `${doc.slices || 0} 个切片可用`,
  };
}

function docRowActions(item) {
  const menuOpen = state.docManagement.rowMenu === item.id;
  return {
    type: "docActions",
    item,
    menuOpen,
  };
}

function renderDocUploadPage() {
  const view = state.docManagement.uploadView;
  const canGoNext = view.step !== 1 || (view.files.length > 0 && view.files.every((file) => file.status === "done"));
  return `
    <section class="page-panel upload-page">
      <div class="upload-page-head">
        <button class="config-back-btn" data-handler="${registerHandler({ type: "closeDocUpload" })}" aria-label="返回文档管理">
          ${icon("calendarPrev", "wj-icon config-back-icon")}
        </button>
        <div class="section-title upload-page-title">上传文档</div>
      </div>
      <div class="upload-page-body">
        ${renderUploadStepbar(view.step)}
        <div class="upload-step-scroll upload-step-scroll-${view.step}">
          ${view.step === 1 ? renderUploadFilesStep(view) : ""}
          ${view.step === 2 ? renderUploadProcessStep(view) : ""}
          ${view.step === 3 ? renderUploadPreviewStep(view) : ""}
        </div>
      </div>
      <div class="upload-page-foot">
        <button class="btn" data-handler="${registerHandler({ type: "closeDocUpload" })}">取消</button>
        ${view.step > 1 ? `<button class="btn" data-handler="${registerHandler({ type: "docUploadPrev" })}">上一步</button>` : ""}
        ${view.step < 3
          ? `<button class="btn primary" data-upload-next ${canGoNext ? "" : "disabled"} data-handler="${registerHandler({ type: "docUploadNext" })}">下一步</button>`
          : `<button class="btn primary" data-handler="${registerHandler({ type: "docUploadConfirm" })}">入库</button>`}
      </div>
    </section>
  `;
}

function renderUploadStepbar(step) {
  const labels = ["上传文件", "文件处理", "切片预览"];
  return `
    <div class="upload-stepbar">
      ${labels.map((label, index) => {
        const number = index + 1;
        const done = step > number;
        const active = step === number;
        return `
          <div class="upload-step ${active ? "active" : ""} ${done ? "done" : ""}">
            <span class="upload-step-num">${done ? "✓" : number}</span>
            <span>${label}</span>
          </div>
          ${number < labels.length ? `<span class="upload-step-line ${step > number ? "done" : ""} ${step === number ? "active" : ""}"></span>` : ""}
        `;
      }).join("")}
    </div>
  `;
}

function renderUploadFilesStep(view) {
  return `
    <div class="upload-step-one">
      <div class="upload-section-label">上传文件</div>
      <label class="upload-dropzone" for="upload-file-input">
        <input id="upload-file-input" class="upload-file-input" type="file" multiple accept=".pdf,.doc,.docx,.txt,.md,.xls,.xlsx,.csv,.ppt,.pptx,.html,.htm" />
        ${icon("uploadBox", "upload-box-icon", { width: "42px", height: "42px" })}
        <div class="upload-drop-title">将文件拖到此处，或点击批量上传</div>
        <div class="upload-drop-sub">一次最多上传 ${MAX_UPLOAD_FILES} 个文件；支持 pdf、docx、doc、txt、md、xlsx、xls、csv、pptx、ppt、html、htm，单个文档不超过100M</div>
      </label>
      <div class="uploaded-head">
        <span>已传文件（${view.files.length}/${MAX_UPLOAD_FILES}）</span>
        ${view.files.length >= MAX_UPLOAD_FILES ? `<em>已达到本次上传上限</em>` : `<em>还可添加 ${MAX_UPLOAD_FILES - view.files.length} 个</em>`}
      </div>
      <div class="uploaded-list">
        ${view.files.length ? view.files.map((file) => renderUploadedFile(file)).join("") : `<div class="uploaded-empty">暂无已上传文件</div>`}
      </div>
    </div>
  `;
}

function renderUploadedFile(file) {
  const tone = uploadFormatTone(file.format);
  const statusIcon = file.status === "uploading"
    ? `<span class="uploaded-percent">${file.progress}%</span>`
    : `
      <span class="uploaded-check upload-row-check">${icon("check", "wj-icon")}</span>
      <button class="uploaded-delete upload-row-delete" data-handler="${registerHandler({ type: "deleteUploadedFile", id: file.id })}" aria-label="删除文件">${icon("trash", "wj-icon")}</button>
    `;
  return `
    <div class="uploaded-file ${file.status}" data-upload-file-id="${file.id}">
      <div class="uploaded-progress" data-upload-progress="${file.id}" style="width:${file.status === "uploading" ? file.progress : 100}%"></div>
      <div class="uploaded-file-main">
        <span class="file-type-icon ${tone}">${icon(fileIconName(file.format), "wj-icon")}</span>
        <span>
          <strong>${escapeHtml(file.name)}</strong>
          <em>${escapeHtml(file.size)}</em>
        </span>
      </div>
      <div class="uploaded-status" data-upload-status="${file.id}">${statusIcon}</div>
    </div>
  `;
}

function renderUploadProcessStep(view) {
  return `
    <div class="upload-process-shell ${view.mode === "scenario" ? "scenario" : "split"}">
      <div class="upload-section-label">选择处理模式</div>
      <div class="upload-mode-grid">
        ${renderUploadModeCard("split", "分步骤配置模式", "自由组合解析、分段与增强策略", view.mode === "split")}
        ${renderUploadModeCard("scenario", "场景化综合模式", "一键应用特定场景的最佳实践", view.mode === "scenario")}
      </div>
      ${view.mode === "split" ? renderSplitProcessConfig(view) : renderScenarioProcessConfig(view)}
    </div>
  `;
}

function renderUploadModeCard(mode, title, desc, active) {
  return `
    <button class="upload-mode-card ${active ? "active" : ""}" data-handler="${registerHandler({ type: "setUploadMode", mode })}">
      <span>
        <strong>${title}</strong>
        <em>${desc}</em>
      </span>
      <i></i>
    </button>
  `;
}

function renderSplitProcessConfig(view) {
  return `
    <div class="config-section">
      <div class="config-section-title">解析算法<span class="required">*</span></div>
      <div class="upload-algorithm-grid">
        ${getUploadedFormatItems(view).map(({ format, tone }) => renderUploadAlgorithmCard(format, getFormatAlgorithmValue(format), tone)).join("")}
      </div>
    </div>
    ${renderUploadFormatOptimization(view)}
    <div class="config-section">
      <div class="config-section-title">分段策略</div>
      <div class="upload-strategy-list">
        ${renderUploadStrategy("auto", "自动分段与清洗", "系统自动识别段落换行并进行切分，适用于通用文档，无需配置参数。", "segmentAutoRobot", view.segment === "auto", "")}
        ${renderUploadStrategy("custom", "自定义分段与清洗", "手动配置正则表达式、长度限制与清洗规则", "segmentCustomControls", view.segment === "custom", renderCustomSegmentPanel(view))}
        ${renderUploadStrategy("component", "内容分段组件", "选择预置的高级切分组件处理复杂文档", "segmentComponentBlocks", view.segment === "component", renderSegmentComponentPanel())}
      </div>
    </div>
    <div class="config-section">
      <div class="config-section-title">增强策略</div>
      <div class="upload-enhance-list">
        ${renderUploadEnhance("table", "表格解析", "识别文档中的表格并转换为Markdown/HTML格式", "默认模型")}
        ${renderUploadEnhance("image", "图片解析", "解析文档中插图内容", "Tesseract")}
        ${renderUploadEnhance("keyword", "关键词提取", "自动提取每段文本的核心关键词", "默认模型")}
        ${renderUploadEnhance("summary", "内容总结", "对每个切片进行对应的内容提取总结", "默认模型")}
      </div>
    </div>
  `;
}

function renderUploadFormatOptimization(view) {
  const mode = uploadPreviewMode(view);
  if (mode === "excel") {
    const items = [
      ["Sheet 识别", "识别多 Sheet、隐藏 Sheet，并写入切片元数据"],
      ["复杂表头", "自动识别跨行表头、合并单元格和字段层级"],
      ["行块切片", "按 Sheet + 表头 + N 行数据生成表格切片"],
      ["公式结果", "保留公式表达式和计算结果，支持问答引用"],
      ["批注/隐藏列", "解析批注、隐藏行列，并在来源中标识"],
      ["结构化索引", "为字段名、字段值、Sheet、行号建立可过滤元数据"],
    ];
    return `
      <div class="config-section upload-format-config excel">
        <div class="config-section-title">Excel 专属处理</div>
        <div class="upload-format-config-grid">
          ${items.map(([title, desc]) => renderUploadFormatConfigItem(title, desc, true)).join("")}
        </div>
        <div class="upload-format-note">切片来源将展示为：文件名 / Sheet 名 / 行号范围，适合字段查询、条件筛选和汇总统计。</div>
      </div>
    `;
  }
  if (mode === "ppt") {
    const items = [
      ["按 Slide 切片", "每页幻灯片生成独立切片，保留页码和标题"],
      ["备注解析", "读取演讲者备注并合并到召回内容"],
      ["图片 OCR", "识别图片型页面中的文字和流程节点"],
      ["图表数据", "提取图表标题、图例、数据标签和趋势摘要"],
      ["表格解析", "识别 Slide 中的表格内容并保留结构"],
      ["缩略图", "生成 Slide 缩略图，用于切片预览和人工核验"],
    ];
    return `
      <div class="config-section upload-format-config ppt">
        <div class="config-section-title">PPT 专属处理</div>
        <div class="upload-format-config-grid">
          ${items.map(([title, desc]) => renderUploadFormatConfigItem(title, desc, true)).join("")}
        </div>
        <div class="upload-format-note">切片来源将展示为：文件名 / Slide 页码，适合页面内容查询、主题总结和图片文字召回。</div>
      </div>
    `;
  }
  return "";
}

function renderUploadFormatConfigItem(title, desc, checked) {
  return `
    <button class="upload-format-config-item" data-handler="${registerHandler({ type: "noop" })}">
      ${renderCell(checkbox({ checked }))}
      <span>
        <strong>${title}</strong>
        <em>${desc}</em>
      </span>
    </button>
  `;
}

function renderUploadAlgorithmCard(format, value, tone) {
  return `
    <button class="upload-algorithm-card" data-handler="${registerHandler({ type: "cycleFormatAlgorithm", format })}">
      <span class="file-type-icon ${tone}">${icon(fileIconName(format), "wj-icon")}</span>
      <strong>${format}</strong>
      <span>${value}</span>
      ${icon("filterChevron", "wj-icon algorithm-chevron")}
    </button>
  `;
}

function renderUploadStrategy(key, title, desc, iconName, active, extra) {
  return `
    <div class="upload-strategy-card ${active ? "active" : ""}">
      <button class="upload-strategy-head" data-handler="${registerHandler({ type: "setUploadSegment", segment: key })}">
        <span class="strategy-icon ${key}">${icon(iconName, "wj-icon", { width: "40px", height: "40px", preserveColor: true })}</span>
        <span>
          <strong>${title}</strong>
          <em>${desc}</em>
        </span>
      </button>
      ${active ? extra : ""}
    </div>
  `;
}

function renderCustomSegmentPanel(view) {
  return `
    <div class="custom-segment-panel">
      <label><span>分段标识符</span><input value="5" /></label>
      <label><span>分段最大长度</span><input type="number" value="5" /></label>
      <label><span>分段重叠长度</span><input type="number" value="5" /></label>
      <div class="custom-clean-title">文本预处理规则</div>
      <button class="custom-check" data-handler="${registerHandler({ type: "toggleUploadCheck", key: "cleanSpaces" })}">
        ${renderCell(checkbox({ checked: view.checks.cleanSpaces }))}
        <span>替换掉连续的空格、换行符和制表符</span>
      </button>
      <button class="custom-check" data-handler="${registerHandler({ type: "toggleUploadCheck", key: "removeLinks" })}">
        ${renderCell(checkbox({ checked: view.checks.removeLinks }))}
        <span>删除所有URL和电子邮件地址</span>
      </button>
    </div>
  `;
}

function renderSegmentComponentPanel() {
  return `
    <div class="segment-component-panel">
      <div class="upload-section-label">切片组件</div>
      <button class="segment-select" data-handler="${registerHandler({ type: "noop" })}">
        <span>请选择切片组件</span>
        ${icon("filterChevron", "wj-icon")}
      </button>
    </div>
  `;
}

function renderUploadEnhance(key, title, desc, model) {
  const view = state.docManagement.uploadView;
  return `
    <div class="upload-enhance-row">
      <button class="enhance-check" data-handler="${registerHandler({ type: "toggleUploadCheck", key })}">
        ${renderCell(checkbox({ checked: view.checks[key] }))}
      </button>
      <span>
        <strong>${title}</strong>
        <em>${desc}</em>
      </span>
      <button class="upload-select-lite" data-handler="${registerHandler({ type: "noop" })}">
        ${model}
        ${icon("filterChevron", "wj-icon")}
      </button>
    </div>
  `;
}

function renderScenarioProcessConfig(view) {
  const categories = ["全部", "金融类", "法律类", "人事类", "通用/其他"];
  const components = ["金融研报分析 PRO", "法律合同审查", "简历智能解析", "增值税发票识别"];
  return `
    <div class="config-section scenario-components">
      <div class="config-section-title">选择综合组件<span class="required">*</span></div>
      <div class="scenario-tabs">
        ${categories.map((category) => `<button class="${category === view.category ? "active" : ""}" data-handler="${registerHandler({ type: "setUploadCategory", category })}">${category}</button>`).join("")}
      </div>
      <div class="scenario-grid">
        ${Array.from({ length: 20 }, (_, index) => {
          const name = components[index % components.length];
          return `<button class="scenario-card ${name === view.component ? "active" : ""}" data-handler="${registerHandler({ type: "setUploadComponent", component: name })}">${name}</button>`;
        }).join("")}
      </div>
      <div class="scenario-count">共 20 个组件 <span>当前选择：<b>${escapeHtml(view.component)}</b></span></div>
      <div class="scenario-detail">
        <div class="scenario-detail-title">${icon("info", "wj-icon")}能力详情</div>
        <strong>${escapeHtml(view.component)}</strong>
        <p>自动识别甲乙方主题，提取关键条款，检查合规性风险点。</p>
        <em>核心能力：</em>
        <p class="scenario-ok">${icon("check", "wj-icon")}提取合同关键要素：金额、期限、违约责任等。</p>
        <p class="scenario-ok">${icon("check", "wj-icon")}自动高亮模糊条款与潜在法律风险。</p>
      </div>
    </div>
  `;
}

function renderUploadPreviewStep(view) {
  const mode = uploadPreviewMode(view);
  return `
    <div class="upload-preview-shell ${view.showFileList ? "" : "collapsed-list"} ${mode !== "text" ? `format-${mode}` : ""}">
      ${!view.showFileList ? `<button class="upload-preview-float-toggle" data-handler="${registerHandler({ type: "toggleUploadFileList" })}" aria-label="展开文件列表">${icon("collapseList", "wj-icon")}</button>` : ""}
      ${view.showFileList ? renderUploadPreviewFileList(view) : ""}
      ${renderUploadOriginalPreview(view)}
      ${renderUploadSlicePreview(view)}
    </div>
  `;
}

function renderUploadPreviewFileList(view) {
  const files = view.files?.length
    ? view.files
    : [
        { id: "preview-1", name: "走查问题归纳" },
        { id: "preview-2", name: "文件名称文件名称文件..." },
      ];
  return `
    <aside class="upload-preview-files">
      <div class="upload-preview-head">
        <span>文件列表</span>
        <em>点击文件查看对应切片</em>
        <button class="upload-preview-toggle" data-handler="${registerHandler({ type: "toggleUploadFileList" })}" aria-label="收起文件列表">${icon("collapseList", "wj-icon")}</button>
      </div>
      <div class="upload-preview-file-items">
        ${files.map((file, index) => {
          const format = file.format || normalizeUploadedFormat(file.name);
          const fileMode = uploadPreviewMode({ files: [file] });
          const active = getActiveUploadFile(view)?.id === file.id || (!getActiveUploadFile(view) && index === 0);
          return `
          <button class="upload-preview-file ${active ? "active" : ""} ${fileMode}" data-handler="${registerHandler({ type: "selectUploadPreviewFile", id: file.id })}">
            <span class="file-type-icon ${uploadFormatTone(format)}">${icon(fileIconName(format), "wj-icon")}</span>
            <span>${escapeHtml(file.name)}</span>
            <em>${fileMode === "excel" ? "表格切片" : fileMode === "ppt" ? "Slide切片" : "文本切片"}</em>
          </button>
        `; }).join("")}
      </div>
    </aside>
  `;
}

function renderUploadOriginalPreview(view) {
  const mode = uploadPreviewMode(view);
  const doc = uploadPreviewDoc(view);
  const slices = getDocSliceItems(doc);
  const activeSlice = slices[view.activeSlice] || slices[0];
  if (mode === "excel") return renderUploadExcelOriginalPreview(activeSlice);
  if (mode === "ppt") return renderUploadPptOriginalPreview(activeSlice);
  return `
    <section class="upload-original-panel">
      <div class="upload-preview-head">
        <span>原始文档预览</span>
        <span class="zoom-tools">－ <b>100%</b> ＋</span>
      </div>
      <div class="upload-paper-canvas">
        <div class="paper-page-real">
          <div class="paper-rule top"></div>
          <div class="paper-caption">版本说明</div>
          <div class="paper-grid-table">
            ${Array.from({ length: 36 }, (_, index) => `<span>${paperCellText(index)}</span>`).join("")}
          </div>
          <div class="paper-rule bottom"></div>
        </div>
      </div>
    </section>
  `;
}

function renderUploadExcelOriginalPreview(activeSlice) {
  return `
    <section class="upload-original-panel">
      <div class="upload-preview-head">
        <span>Excel 原表预览</span>
        <span class="zoom-tools">Sheet：${escapeHtml((activeSlice.meta || "").split("·")[0].replace("Sheet：", "").trim() || "项目总览")}</span>
      </div>
      <div class="upload-format-canvas excel">
        <div class="excel-sheet-tabs"><span class="active">项目总览</span><span>销售明细</span><span>风险备注</span></div>
        <div class="excel-grid-preview upload-excel-grid">
          ${["A", "B", "C", "D", "E", "F"].map((head) => `<b>${head}</b>`).join("")}
          ${activeSlice.excelRows.map((row) => row.map((cell) => `<span>${escapeHtml(cell)}</span>`).join("")).join("")}
          ${Array.from({ length: 18 }, (_, index) => `<span>${index % 6 === 0 ? index / 6 + 4 : ""}</span>`).join("")}
        </div>
      </div>
    </section>
  `;
}

function renderUploadPptOriginalPreview(activeSlice) {
  return `
    <section class="upload-original-panel">
      <div class="upload-preview-head">
        <span>PPT 页面预览</span>
        <span class="zoom-tools">${escapeHtml(activeSlice.meta || "Slide 1")}</span>
      </div>
      <div class="upload-format-canvas ppt">
        <div class="ppt-preview-slide upload-ppt-slide">
          <div class="ppt-sidebar-preview"></div>
          <div class="ppt-slide-main">
            <span class="ppt-kicker">ENERGY STORAGE</span>
            <h3>${escapeHtml((activeSlice.meta || "Slide").split("·").pop().trim())}</h3>
            <p>${escapeHtml(activeSlice.summary.slice(0, 88))}...</p>
            <div class="ppt-chart-bars"><span></span><span></span><span></span><span></span></div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderUploadSlicePreview(view) {
  const mode = uploadPreviewMode(view);
  if (mode === "excel") return renderUploadExcelSlicePreview(view);
  if (mode === "ppt") return renderUploadPptSlicePreview(view);
  const slices = [
    "容器云 4.0 UI走查问题归纳\n1.模块间距问题（问题出现频率：高）\n主要体现在模块间的对齐，模块与模块间的问题过小等",
    "2.字体样式问题（问题出现频率：高）\n主要体现在字体大小，字体颜色，title或重点文字没有加粗",
    "版本/状态 作者 参与者 起止日期 备注\nV1.0 杨文逸 2020.12.24 起草",
    "2.字体样式问题（问题出现频率：高）\n主要体现在字体大小，字体颜色，title或重点文字没有加粗",
    "2.字体样式问题（问题出现频率：高）\n主要体现在字体大小，字体颜色，title或重点文字没有加粗",
  ];
  return `
    <section class="upload-slice-panel">
      <div class="upload-preview-head"><span>分段预览</span></div>
      <div class="upload-slice-list">
        ${slices.map((text, index) => `
          <button class="upload-slice-card ${view.activeSlice === index ? "active" : ""}" data-handler="${registerHandler({ type: "selectUploadSlice", index })}">
            ${index === 2 ? renderMiniTableSlice() : escapeHtml(text).replaceAll("\n", "<br />")}
          </button>
        `).join("")}
      </div>
    </section>
  `;
}

function renderUploadExcelSlicePreview(view) {
  const doc = uploadPreviewDoc(view);
  const slices = getDocSliceItems(doc);
  return `
    <section class="upload-slice-panel upload-format-slice-panel excel">
      <div class="upload-preview-head"><span>Excel 表格切片预览</span><em>Sheet / 行号 / 字段值</em></div>
      <div class="upload-slice-list">
        ${slices.map((slice, index) => `
          <button class="upload-format-slice-card excel ${view.activeSlice === index ? "active" : ""}" data-handler="${registerHandler({ type: "selectUploadSlice", index })}">
            <div class="upload-format-slice-head"><strong>${escapeHtml(slice.title)}</strong><span>${escapeHtml(slice.meta)}</span></div>
            <p>${escapeHtml(slice.summary)}</p>
            ${renderExcelSliceDetail(slice)}
          </button>
        `).join("")}
      </div>
    </section>
  `;
}

function renderUploadPptSlicePreview(view) {
  const doc = uploadPreviewDoc(view);
  const slices = getDocSliceItems(doc);
  return `
    <section class="upload-slice-panel upload-format-slice-panel ppt">
      <div class="upload-preview-head"><span>PPT Slide 切片预览</span><em>缩略图 / OCR / 备注 / 图表</em></div>
      <div class="upload-slice-list">
        ${slices.map((slice, index) => `
          <button class="upload-format-slice-card ppt ${view.activeSlice === index ? "active" : ""}" data-handler="${registerHandler({ type: "selectUploadSlice", index })}">
            <div class="upload-format-slice-head"><strong>${escapeHtml(slice.title)}</strong><span>${escapeHtml(slice.meta)}</span></div>
            <div class="upload-ppt-slice-row">
              <span class="ppt-thumb static">${sampleImageThumb(slice.imageKind || "slide")}</span>
              <p>${escapeHtml(slice.summary)}</p>
            </div>
            ${slice.chart ? `<div class="ppt-chart-list">${slice.chart.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}</div>` : ""}
            <div class="slice-tag-row">${slice.tags.map((tagText) => `<span>${escapeHtml(tagText)}</span>`).join("")}</div>
          </button>
        `).join("")}
      </div>
    </section>
  `;
}

function renderMiniTableSlice() {
  const heads = ["版本/状态", "作者", "参与者", "起止日期", "备注"];
  return `<div class="mini-table-slice">${heads.map((item) => `<b>${item}</b>`).join("")}${["V1.0", "杨文逸", "", "2020.12 .24", "起草"].map((item) => `<span>${item}</span>`).join("")}${Array.from({ length: 10 }, () => "<span></span>").join("")}</div>`;
}

function paperCellText(index) {
  const cells = ["版本/状态", "作者", "参与者", "日期日期", "起止日期", "备注", "V1.0", "杨文逸", "大大", "疙啰啰", "2020.12.24", "起草"];
  return cells[index] || "";
}

function fileIconName(format) {
  if (format === "PDF") return "pdfFile";
  if (format === "PPT" || format === "PPTX") return "pptFile";
  if (format === "XLS" || format === "XLSX" || format === "CSV") return "excelFile";
  if (format === "HTML" || format === "HTM") return "htmlFile";
  if (format === "MD") return "mdFile";
  if (format === "TXT") return "txtFile";
  return "wordFile";
}

function uploadFormatTone(format) {
  const normalized = String(format || "").toLowerCase();
  if (normalized === "pdf") return "pdf";
  if (normalized === "ppt" || normalized === "pptx") return "ppt";
  if (normalized === "xls" || normalized === "xlsx" || normalized === "csv") return "xlsx";
  if (normalized === "html" || normalized === "htm") return "html";
  if (normalized === "txt") return "txt";
  if (normalized === "md") return "md";
  return "docx";
}

function normalizeUploadedFormat(fileName) {
  const ext = (String(fileName || "").split(".").pop() || "docx").toUpperCase();
  if (ext === "WORD") return "DOCX";
  if (ext === "HTM") return "HTM";
  return ext;
}

function getSupportedFormatItem(format) {
  const normalized = String(format || "").toUpperCase();
  return SUPPORTED_DOC_FORMATS.find((item) => item.format === normalized);
}

function getUploadedFormatItems(view) {
  const seen = new Set();
  return (view.files || [])
    .filter((file) => file.status === "done")
    .map((file) => getSupportedFormatItem(file.format))
    .filter(Boolean)
    .filter((item) => {
      if (seen.has(item.format)) return false;
      seen.add(item.format);
      return true;
    });
}

function getActiveUploadFile(view) {
  const files = view?.files || [];
  if (!files.length) return null;
  return files.find((item) => item.id === view.activeUploadFileId) || files.find((item) => item.status === "done") || files[0];
}

function getPrimaryUploadedFormat(view) {
  const file = getActiveUploadFile(view);
  return String(file?.format || "").toUpperCase();
}

function uploadPreviewMode(view) {
  const format = getPrimaryUploadedFormat(view);
  if (isSpreadsheetFormat(format)) return "excel";
  if (isPresentationFormat(format)) return "ppt";
  return "text";
}

function uploadPreviewDoc(view) {
  const format = getPrimaryUploadedFormat(view);
  const file = getActiveUploadFile(view);
  if (isSpreadsheetFormat(format)) return { format, name: file?.name || "2026储能项目经营数据表.xlsx" };
  if (isPresentationFormat(format)) return { format, name: file?.name || "储能产品路演材料.pptx" };
  return { format: format || "PDF", name: file?.name || "固态电池行业研究报告.pdf" };
}

function appendUploadedFiles(files) {
  const view = state.docManagement.uploadView;
  if (!view || files.length === 0) return;
  const remainingSlots = Math.max(0, MAX_UPLOAD_FILES - view.files.length);
  if (!remainingSlots) return;
  const uploadFiles = files
    .slice(0, remainingSlots)
    .map((file, index) => {
      const format = normalizeUploadedFormat(file.name);
      const supported = getSupportedFormatItem(format);
      if (!supported) return null;
      return {
        id: `local-${Date.now()}-${index}-${Math.random().toString(36).slice(2, 7)}`,
        name: file.name,
        size: formatFileSize(file.size),
        format,
        status: "uploading",
        progress: 12,
      };
    })
    .filter(Boolean);
  if (!uploadFiles.length) return;
  view.files = [...view.files, ...uploadFiles].slice(0, MAX_UPLOAD_FILES);
  if (!view.activeUploadFileId) view.activeUploadFileId = uploadFiles[0].id;
  view.activeSlice = 0;
  render();
  uploadFiles.forEach((file) => startUploadProgress(file.id));
}

function clearUploadProgress(id) {
  const timer = uploadProgressTimers.get(id);
  if (timer) window.clearInterval(timer);
  uploadProgressTimers.delete(id);
}

function clearAllUploadProgress() {
  uploadProgressTimers.forEach((timer) => window.clearInterval(timer));
  uploadProgressTimers.clear();
}

function startUploadProgress(id) {
  clearUploadProgress(id);
  const timer = window.setInterval(() => {
    const view = state.docManagement.uploadView;
    const file = view?.files.find((item) => item.id === id);
    if (!file) {
      clearUploadProgress(id);
      return;
    }
    const nextProgress = Math.min(100, file.progress + (file.progress < 70 ? 18 : 10));
    file.progress = nextProgress;
    if (nextProgress >= 100) {
      file.status = "done";
      clearUploadProgress(id);
      updateUploadCompleteDom(file);
      return;
    }
    updateUploadProgressDom(id, nextProgress);
  }, 420);
}

function updateUploadProgressDom(id, progress) {
  const progressEl = document.querySelector(`[data-upload-progress="${CSS.escape(id)}"]`);
  const statusEl = document.querySelector(`[data-upload-status="${CSS.escape(id)}"] .uploaded-percent`);
  if (progressEl) progressEl.style.width = `${progress}%`;
  if (statusEl) statusEl.textContent = `${progress}%`;
}

function updateUploadCompleteDom(file) {
  const id = file.id;
  const row = document.querySelector(`[data-upload-file-id="${CSS.escape(id)}"]`);
  const progressEl = document.querySelector(`[data-upload-progress="${CSS.escape(id)}"]`);
  const statusEl = document.querySelector(`[data-upload-status="${CSS.escape(id)}"]`);
  const nextBtn = document.querySelector("[data-upload-next]");
  if (row) row.className = "uploaded-file done";
  if (progressEl) progressEl.style.width = "100%";
  if (statusEl) {
    statusEl.innerHTML = `
      <span class="uploaded-check upload-row-check">${icon("check", "wj-icon")}</span>
      <button class="uploaded-delete upload-row-delete" data-handler="${registerHandler({ type: "deleteUploadedFile", id })}" aria-label="删除文件">${icon("trash", "wj-icon")}</button>
    `;
  }
  const view = state.docManagement.uploadView;
  const allDone = !!view?.files.length && view.files.every((item) => item.status === "done");
  if (nextBtn) {
    if (allDone) nextBtn.removeAttribute("disabled");
    else nextBtn.setAttribute("disabled", "");
  }
}

function formatFileSize(size) {
  if (!Number.isFinite(size)) return "0KB";
  if (size >= 1024 * 1024) return `${(size / 1024 / 1024).toFixed(2)}MB`;
  return `${(size / 1024).toFixed(2)}KB`;
}

function renderDocConfigPage() {
  const view = state.docManagement.configView;
  const docs = getDocConfigDocs();
  const isBatch = view.configMode === "batch";
  const title = isBatch ? "批量修改配置" : "修改配置";
  return `
    <section class="page-panel upload-page doc-config-page">
      <div class="upload-page-head">
        <button class="config-back-btn" data-handler="${registerHandler({ type: "closeDocConfig" })}" aria-label="返回文档管理">
          ${icon("calendarPrev", "wj-icon config-back-icon")}
        </button>
        <div class="section-title upload-page-title">${title}</div>
      </div>
      <div class="upload-page-body">
        ${renderDocConfigStepbar(view.step)}
        <div class="upload-step-scroll ${view.step === 2 ? "upload-step-scroll-3" : "upload-step-scroll-2"}">
          ${view.step === 1 ? renderUploadProcessStep(view) : renderUploadPreviewStep(view)}
        </div>
      </div>
      <div class="upload-page-foot">
        <button class="btn" data-handler="${registerHandler({ type: "closeDocConfig" })}">取消</button>
        ${view.step === 2 ? `<button class="btn" data-handler="${registerHandler({ type: "docConfigPrev" })}">上一步</button>` : ""}
        ${view.step === 1
          ? `<button class="btn primary" data-handler="${registerHandler({ type: "docConfigNext" })}">下一步</button>`
          : `<button class="btn primary" data-handler="${registerHandler({ type: "docConfigConfirm" })}">确认修改</button>`}
      </div>
    </section>
  `;
}

function renderDocConfigStepbar(step) {
  const labels = ["文件处理", "切片预览"];
  return `
    <div class="upload-stepbar config-upload-stepbar">
      ${labels.map((label, index) => {
        const number = index + 1;
        const done = step > number;
        const active = step === number;
        return `
          <div class="upload-step ${active ? "active" : ""} ${done ? "done" : ""}">
            <span class="upload-step-num">${done ? "✓" : number}</span>
            <span>${label}</span>
          </div>
          ${number < labels.length ? `<span class="upload-step-line ${step > number ? "done" : ""} ${step === number ? "active" : ""}"></span>` : ""}
        `;
      }).join("")}
    </div>
  `;
}

function renderConfigStep(index, label, current) {
  const done = current > index;
  const active = current === index;
  return `
    <div class="config-step ${active ? "active" : ""} ${done ? "done" : ""}">
      <span class="config-step-num">${done ? "✓" : index}</span>
      <span>${label}</span>
    </div>
  `;
}

function renderDocConfigForm(isBatch, docs) {
  return `
    <div class="config-form-shell">
      ${isBatch ? renderBatchSummary(docs) : renderSingleSummary(docs[0])}
      <div class="config-section">
        <div class="config-section-title">选择处理模式</div>
        <div class="config-mode-grid">
          ${renderModeCard("分步骤配置模式", "自由组合解析、分段与增强策略", true)}
          ${renderModeCard("场景化综合模式", "一键应用特定场景的最佳实践", false)}
        </div>
      </div>
      <div class="config-section">
        <div class="config-section-title">解析算法<span class="required">*</span></div>
        ${renderAlgorithmConfig(isBatch, docs)}
      </div>
      <div class="config-section">
        <div class="config-section-title">分段策略</div>
        <div class="strategy-list">
          ${renderStrategy("自动分段与清洗", "系统自动识别段落换行并切分，适用于通用文档，无需配置参数。", "A", true)}
          ${renderStrategy("自定义分段与清洗", "手动配置正则表达式、长度限制与清洗规则。", "C", false)}
          ${renderStrategy("内容分段组件", "选择预置的高级切分组件处理复杂文档。", "G", false)}
        </div>
      </div>
      <div class="config-section">
        <div class="config-section-title">增强策略</div>
        <div class="enhance-list">
          ${renderEnhance("表格解析", "识别文档中的表格并转换为 Markdown / HTML 格式", true)}
          ${renderEnhance("图片解析", "抽取图片文字与图注，补充到切片内容中", false)}
          ${renderEnhance("标题增强", "识别章节层级并将标题路径写入切片元数据", true)}
        </div>
      </div>
    </div>
  `;
}

function renderSingleSummary(doc) {
  if (!doc) return "";
  return `
    <div class="config-summary single">
      <span class="doc-format-badge ${doc.format.toLowerCase()}">${doc.format.slice(0, 1)}</span>
      <span class="ellipsis">${doc.name}</span>
      <span class="tag ${doc.ops === "failed" ? "danger" : "success"}">${doc.statusText}</span>
    </div>
  `;
}

function renderBatchSummary(docs) {
  const counts = docs.reduce((map, item) => {
    map[item.format] = (map[item.format] || 0) + 1;
    return map;
  }, {});
  return `
    <div class="config-summary batch">
      <div>
        <div class="config-summary-title">已选择文档</div>
        <div class="config-summary-sub">批量配置将对选中文档应用相同处理方式。</div>
      </div>
      <div class="config-summary-count">${docs.length}</div>
      <div class="config-summary-chips">
        ${Object.entries(counts).map(([format, count]) => `<span class="chip">${format} ${count} 个</span>`).join("")}
      </div>
    </div>
  `;
}

function renderModeCard(title, desc, active) {
  return `
    <button class="config-mode-card ${active ? "active" : ""}" data-handler="${registerHandler({ type: "noop" })}">
      <span>
        <strong>${title}</strong>
        <em>${desc}</em>
      </span>
      <i></i>
    </button>
  `;
}

function renderAlgorithmConfig(isBatch, docs) {
  return renderAlgorithmGrid(docs);
}

function renderAlgorithmGrid(docs = []) {
  return `
    <div class="algorithm-grid">
      ${SUPPORTED_DOC_FORMATS.map(({ format, tone }) => renderAlgorithmCard(format, getFormatAlgorithmValue(format), tone)).join("")}
    </div>
  `;
}

function renderAlgorithmCard(format, value, tone) {
  return `
    <button class="algorithm-card" data-handler="${registerHandler({ type: "cycleFormatAlgorithm", format })}">
      <span class="doc-format-badge ${tone}">${format.slice(0, 1)}</span>
      <strong>${format}</strong>
      <span class="algorithm-value">${value}</span>
      ${icon("filterChevron", "wj-icon algorithm-chevron")}
    </button>
  `;
}

function renderStrategy(title, desc, mark, active) {
  return `
    <button class="strategy-card ${active ? "active" : ""}" data-handler="${registerHandler({ type: "noop" })}">
      <span class="strategy-mark">${mark}</span>
      <span class="strategy-copy">
        <strong>${title}</strong>
        <em>${desc}</em>
      </span>
      <i></i>
    </button>
  `;
}

function renderEnhance(title, desc, checked) {
  return `
    <button class="enhance-row" data-handler="${registerHandler({ type: "noop" })}">
      ${renderCell(checkbox({ checked }))}
      <span>
        <strong>${title}</strong>
        <em>${desc}</em>
      </span>
      <span class="select-lite">默认模型 ${icon("filterChevron", "wj-icon tiny-icon")}</span>
    </button>
  `;
}

function renderDocConfigPreview(isBatch, docs) {
  return `
    <div class="config-preview-shell ${isBatch ? "batch" : "single"}">
      ${isBatch ? renderBatchFileList(docs) : ""}
      ${renderOriginalPreview()}
      ${renderSlicePreview(isBatch)}
    </div>
  `;
}

function renderBatchFileList(docs) {
  const groupedDocs = Object.entries(groupDocsByFormat(docs)).map(([format, formatDocs]) => ({
    title: `${format} / ${getFormatAlgorithmValue(format)}`,
    docs: formatDocs,
  }));
  return `
    <aside class="preview-file-list">
      <div class="preview-panel-head">文件列表</div>
      <div class="preview-file-items">
        ${groupedDocs.map((group, groupIndex) => `
          ${group.title ? `<div class="preview-group-title">${group.title}</div>` : ""}
          ${group.docs.map((doc, index) => `
            <button class="preview-file-item ${groupIndex === 0 && index === 0 ? "active" : ""}" data-handler="${registerHandler({ type: "noop" })}">
              <span class="doc-format-badge ${doc.format.toLowerCase()}">${doc.format.slice(0, 1)}</span>
              <span class="ellipsis">${doc.name}</span>
              <span class="mini-status ${statusClass(doc)}">${doc.statusText}</span>
            </button>
          `).join("")}
        `).join("")}
      </div>
    </aside>
  `;
}

function renderOriginalPreview() {
  return `
    <section class="preview-panel original">
      <div class="preview-panel-head">
        <span>原文</span>
        <span class="preview-tools">- 100% +</span>
      </div>
      <div class="paper-preview">
        <div class="paper-line wide"></div>
        <div class="paper-line"></div>
        <div class="paper-line short"></div>
        <div class="paper-table">
          <span></span><span></span><span></span>
          <span></span><span></span><span></span>
          <span></span><span></span><span></span>
        </div>
        <div class="paper-line"></div>
        <div class="paper-line short"></div>
      </div>
    </section>
  `;
}

function renderSlicePreview(isBatch) {
  return `
    <section class="preview-panel slices">
      <div class="preview-panel-head">
        <span>切片预览</span>
        <span>${isBatch ? "当前文件 4 段" : "4 段"}</span>
      </div>
      <div class="slice-preview-list">
        ${[
          "容器云 4.0 UI 走查问题归纳。模块间距、字体样式与表格结构被保留。",
          "字体样式问题：字体大小、字体颜色、标题文字加粗信息已进入切片。",
          "表格内容被识别为结构化片段，可用于后续召回与引用。",
          "自动分段与清洗会过滤页眉页脚，并合并异常换行。"
        ].map((text, index) => `<article class="slice-card"><strong>切片 ${index + 1}</strong><p>${text}</p></article>`).join("")}
      </div>
    </section>
  `;
}

function getDocConfigDocs() {
  const view = state.docManagement.configView;
  if (!view) return [];
  const ids = view.ids || [];
  return ids.map((id) => DOC_MANAGEMENT_ROWS.find((item) => item.id === id)).filter(Boolean);
}

function getActiveDocProcessView() {
  return state.docManagement.configView || state.docManagement.uploadView;
}

function openDocConfigView(mode, ids) {
  const docs = ids.map((id) => DOC_MANAGEMENT_ROWS.find((item) => item.id === id)).filter(Boolean);
  if (!docs.length) return;
  state.docManagement.rowMenu = "";
  state.docManagement.uploadView = null;
  state.docManagement.sliceView = null;
  state.docManagement.configView = createDocProcessView({
    configMode: mode,
    mode: "split",
    step: 1,
    ids,
    component: docs[0]?.format === "PDF" ? "法律合同审查" : "简历智能解析",
    formatAlgorithms: createFormatAlgorithmState(),
    files: docs.map((doc) => ({
      id: doc.id,
      name: doc.name,
      size: doc.slices === "-" ? "200.32KB" : `${doc.slices} 个切片`,
      format: doc.format || normalizeUploadedFormat(doc.name),
      status: "done",
      progress: 100,
    })),
  });
  state.resetMainScroll = true;
  render();
}

function groupDocsByFormat(docs) {
  return docs.reduce((map, doc) => {
    if (!map[doc.format]) map[doc.format] = [];
    map[doc.format].push(doc);
    return map;
  }, {});
}

function createFormatAlgorithmState() {
  return SUPPORTED_DOC_FORMATS.reduce((map, item) => {
    map[item.format] = "LangChain-Text";
    return map;
  }, {});
}

function getFormatAlgorithmValue(format) {
  return state.docManagement.configView?.formatAlgorithms?.[format] || state.docManagement.uploadView?.formatAlgorithms?.[format] || "LangChain-Text";
}

function nextFormatAlgorithmName(current) {
  const names = ["LangChain-Text", "Docling-Layout", "MinerU-Parser", "OCR-Enhanced"];
  const index = names.indexOf(current);
  return names[(index + 1) % names.length];
}

function statusClass(doc) {
  if (doc.ops === "failed") return "failed";
  if (doc.ops === "queued") return "queued";
  if (doc.ops === "parsing" || doc.ops === "enhancing") return "processing";
  return "done";
}

function renderCardsPage(page) {
  return `
    <section class="page-panel padded">
      ${renderPills(page)}
      ${page.filters ? renderFilters(page.filters) : ""}
      <div class="card-grid cols-${page.columns}">
        ${page.cards.map(renderCard).join("")}
      </div>
      ${renderPager(page.pagination)}
    </section>
  `;
}

function renderCard(cardData) {
  if (cardData.type === "model") {
    return `
      <article class="model-card">
        <div class="card-head">
          <div class="card-avatar">${icon("cube")}</div>
          <div class="ellipsis">
            <div class="card-title">${cardData.title}</div>
            <div class="card-subtitle">模型编码：${cardData.code}</div>
          </div>
        </div>
        <div class="tag-list">
          <span class="tag primary">${cardData.tagName}</span>
          ${cardData.extra ? `<span class="tag">${cardData.extra}</span>` : ""}
        </div>
        <div class="card-desc">${cardData.desc || "模型已接入系统，可用于智能体、知识库与评测配置。"}</div>
        <div class="card-foot"><span>${cardData.date}</span><button class="link-btn" data-handler="${registerHandler({ type: "drawer", title: cardData.title, fields: modelFields(cardData) })}">查看</button></div>
      </article>
    `;
  }
  if (cardData.type === "tool") {
    return `
      <article class="tool-card">
        <div class="card-head">
          <div class="card-avatar">${icon("tool")}</div>
          <div class="ellipsis">
            <div class="card-title">${cardData.title}</div>
            <div class="status-dot">已认证</div>
          </div>
        </div>
        <div class="card-desc">${cardData.desc}</div>
        <div class="card-subtitle">${cardData.toolCount}</div>
        <div class="tag-list">${cardData.tags.map((item) => `<span class="tag">${item}</span>`).join("")}</div>
      </article>
    `;
  }
  const footerAction = cardData.type === "skill" ? "复用" : "查看";
  return `
    <article class="app-card">
      <div class="card-head">
        <div class="card-avatar">${icon(cardData.type === "skill" ? "star" : "app")}</div>
        <div class="ellipsis">
          <div class="card-title">${cardData.title}</div>
          <div class="card-subtitle">${cardData.subtitle}</div>
        </div>
      </div>
      ${cardData.type === "skill" ? '<div class="status-dot" style="margin-top:8px;">已发布</div>' : ""}
      <div class="card-desc">${cardData.desc}</div>
      ${cardData.tags ? `<div class="tag-list">${cardData.tags.map((item) => `<span class="tag">${item}</span>`).join("")}</div>` : ""}
      <div class="card-foot"><span>${cardData.foot}</span><button class="link-btn" data-handler="${registerHandler({ type: "drawer", title: cardData.title, fields: detailFields(cardData) })}">${footerAction}</button></div>
    </article>
  `;
}

function renderSystemUsersPage(page) {
  const columns = [
    [checkbox(), "42px"],
    ["序号", "60px"],
    ["用户账号", "110px"],
    ["用户名称", "110px"],
    ["部门", "120px"],
    ["手机号码", "110px"],
    ["状态", "70px"],
    ["创建时间", "150px"],
    ["操作", "140px"],
  ];
  const rows = [
    [checkbox(), "1", "admin", "超级管理员", "基础设施部", "15888888888", switcher(), "2026-01-21 21:49:54", actions(["编辑", "重置密码", "删除"])],
    [checkbox(), "2", "operator", "测试", "集团领导", "15666666666", switcher(), "2026-01-21 21:49:54", actions(["编辑", "重置密码", "删除"])],
    [checkbox(), "3", "liudingxiao", "liudingxiao", "试用部门", "", switcher(), "2026-01-22 09:35:41", actions(["编辑", "重置密码", "删除"])],
    [checkbox(), "4", "xupeiqing", "许沛卿", "研发部门", "", switcher(), "2026-01-22 09:48:45", actions(["编辑", "重置密码", "删除"])],
    [checkbox(), "5", "sunqingchao", "孙庆超", "售前/销售部门", "", switcher(), "2026-01-22 10:03:08", actions(["编辑", "重置密码", "删除"])],
    [checkbox(), "6", "yangwenyi", "杨文逸", "研发管理部", "", switcher(), "2026-01-22 10:07:49", actions(["编辑", "重置密码", "删除"])],
    [checkbox(), "7", "xieshuai", "谢帅", "研发部门", "", switcher(), "2026-01-22 10:17:02", actions(["编辑", "重置密码", "删除"])],
    [checkbox(), "8", "jiangtianhao", "姜天灏", "研发部门", "", switcher(), "2026-01-22 10:20:29", actions(["编辑", "重置密码", "删除"])],
    [checkbox(), "9", "zhuweiguang", "朱伟光", "售前/销售部门", "", switcher(), "2026-01-22 10:27:37", actions(["编辑", "重置密码", "删除"])],
    [checkbox(), "10", "dnr", "刁乃儒", "研发部门", "", switcher(), "2026-01-22 10:29:31", actions(["编辑", "重置密码", "删除"])],
  ];
  return `
    <section class="system-layout">
      <aside class="inner-side">
        <label class="side-search"><input placeholder="搜索部门" />${icon("search")}</label>
        <div class="dept-tree">
          ${SYSTEM_TREE.map((group) => `
            <div class="tree-row">${icon("folder")}<span>${group.label}</span></div>
            ${group.children.map((child) => `<div class="tree-row depth-1">${icon("file")}<span>${child}</span></div>`).join("")}
          `).join("")}
        </div>
      </aside>
      <div class="inner-main">
        ${renderFilters([field("请输入用户名称"), field("请输入手机号"), selectField("请选择状态"), dateField("创建开始日期", "创建结束日期"), button("重 置", "reset"), button("删 除", "disabled"), button("导 入", "open"), button("导 出", "open"), button("新增用户", "open", "primary")])}
        ${renderTable(columns, rows)}
        ${renderPager(pager("178", "10条/页", [1, 2, 3, 4, 5]))}
      </div>
    </section>
  `;
}

function renderDataCenterPage(page) {
  const active = state.pageViews[state.path] || "会话记录";
  const tabs = ["会话记录", "点赞记录", "用户反馈"];
  const tableMap = {
    会话记录: {
      columns: [["会话标题", "220px"], ["智能体", "120px"], ["用户", "120px"], ["提问次数", "90px"], ["最后互动时间", "160px"], ["操作", "90px"]],
      rows: [
        ["新能源电动车问答", "新能源电动车智能体", "杨文逸", "12", "2026-04-28 10:12:21", actions(["查看"])],
        ["法律基础问答", "基础法律问答", "王一雄", "9", "2026-04-28 09:54:08", actions(["查看"])],
        ["Prompt 设计咨询", "提示词设计助手演示", "刘颖", "7", "2026-04-28 09:43:10", actions(["查看"])],
      ],
    },
    点赞记录: {
      columns: [["会话标题", "220px"], ["智能体", "120px"], ["点赞用户", "120px"], ["点赞内容", "1fr"], ["点赞时间", "160px"]],
      rows: [
        ["新能源电动车问答", "新能源电动车智能体", "杨文逸", "总结清晰，给出的行业政策引用比较完整。", "2026-04-28 10:16:25"],
        ["Prompt 设计咨询", "提示词设计助手演示", "刘颖", "生成的提示词结构可直接用于工作流。", "2026-04-28 09:47:32"],
      ],
    },
    用户反馈: {
      columns: [["反馈标题", "220px"], ["智能体", "120px"], ["反馈人", "110px"], ["反馈内容", "1fr"], ["状态", "90px"], ["时间", "150px"]],
      rows: [
        ["新能源问答回答偏长", "新能源电动车智能体", "信通院", "希望默认回答更简洁一些，保留结论与来源。", tag("待处理", "warning"), "2026-04-28 09:30:14"],
        ["FAQ 答案来源标记不清晰", "基础法律问答", "杨文逸", "建议明确区分“手动录入”与“上传知识”。", tag("已处理", "success"), "2026-04-27 17:41:06"],
      ],
    },
  };
  const panel = tableMap[active];
  return `
    <section class="page-panel padded">
      <div class="card-grid cols-4" style="margin-bottom:12px;">
        <article class="app-card"><div class="card-title">总会话数</div><div style="margin-top:18px;font-size:28px;font-weight:700;">12,846</div><div class="card-subtitle">近 7 日 +12.4%</div></article>
        <article class="app-card"><div class="card-title">活跃用户</div><div style="margin-top:18px;font-size:28px;font-weight:700;">386</div><div class="card-subtitle">近 7 日 +5.8%</div></article>
        <article class="app-card"><div class="card-title">点赞反馈</div><div style="margin-top:18px;font-size:28px;font-weight:700;">1,294</div><div class="card-subtitle">正向反馈占比 92%</div></article>
        <article class="app-card"><div class="card-title">问题解决率</div><div style="margin-top:18px;font-size:28px;font-weight:700;">84.7%</div><div class="card-subtitle">按最近会话统计</div></article>
      </div>
      <div class="filters">
        ${tabs.map((tab) => `<button class="btn ${tab === active ? "primary" : ""}" data-handler="${registerHandler({ type: "pill", path: state.path, value: tab })}">${tab}</button>`).join("")}
      </div>
      ${renderTable(panel.columns, panel.rows)}
    </section>
  `;
}

function renderTable(columns, rows) {
  return `
    <div class="table-wrap">
      <table class="data-table">
        <thead><tr>${columns.map(([label, width]) => `<th style="width:${width}">${renderCell(label)}</th>`).join("")}</tr></thead>
        <tbody>${rows.map((row) => `<tr>${row.map((cell) => `<td>${renderCell(cell)}</td>`).join("")}</tr>`).join("")}</tbody>
      </table>
    </div>
  `;
}

function renderCell(value) {
  if (value && typeof value === "object") {
    if (value.type === "tag") return `<span class="tag ${value.tone || ""}">${value.text}</span>`;
    if (value.type === "docStatus") {
      const status = docStatusMeta(value.item);
      return `
        <span class="doc-status-tag ${status.tone}" aria-label="${status.label}，${status.detail}" title="${status.detail}">
          ${status.tone === "parsing" || status.tone === "enhancing" ? '<span class="doc-status-spin" aria-hidden="true"></span>' : ""}
          ${status.label}
        </span>
      `;
    }
    if (value.type === "docActions") {
      if (value.item.ops === "queued" || value.item.ops === "parsing" || value.item.ops === "enhancing") {
        return `
          <div class="doc-row-actions">
            <span class="link-btn disabled">配置</span>
            <button class="link-btn" data-handler="${registerHandler({ type: "drawer", title: "删除", fields: actionFields("删除") })}">删除</button>
          </div>
        `;
      }
      return `
        <div class="doc-row-actions">
          <button class="doc-op-switch ${value.item.switchOn ? "on" : "off"}" data-handler="${registerHandler({ type: "toggleDocSwitch", id: value.item.id })}" aria-label="文档状态开关">
            <span class="doc-op-switch-knob"></span>
          </button>
          <button class="link-btn" data-handler="${registerHandler({ type: "openDocSlices", id: value.item.id })}">切片</button>
          <button type="button" class="link-btn doc-config-trigger" data-doc-config-id="${value.item.id}" data-handler="${registerHandler({ type: "openDocConfig", mode: "single", id: value.item.id })}">配置</button>
          <div class="doc-row-more-wrap ${value.menuOpen ? "open" : ""}">
            <button class="doc-more-btn" data-handler="${registerHandler({ type: "toggleDocRowMenu", id: value.item.id })}">
              ${icon("rowMore", "doc-more-icon")}
            </button>
            ${value.menuOpen ? `
              <div class="doc-more-panel">
                <button class="doc-more-item" data-handler="${registerHandler({ type: "drawer", title: "复制", fields: actionFields("复制") })}">复制</button>
                <button type="button" class="doc-more-item doc-config-trigger" data-doc-config-id="${value.item.id}" data-handler="${registerHandler({ type: "openDocConfig", mode: "single", id: value.item.id })}">配置</button>
                <button class="doc-more-item" data-handler="${registerHandler({ type: "drawer", title: "删除", fields: actionFields("删除") })}">删除</button>
              </div>
            ` : ""}
          </div>
        </div>
      `;
    }
    if (value.type === "actions") {
      return `<div class="actions">${value.items.map((item, index) => {
        const disabled = value.disabled && value.disabled[index];
        if (disabled) return `<span class="link-btn disabled">${item.label}</span>`;
        return `<button class="link-btn ${item.dropdown ? "with-icon" : ""}" data-handler="${registerHandler({ type: "drawer", title: item.label, fields: actionFields(item.label) })}">${item.label}${item.dropdown ? icon("chevron", "wj-icon tiny-icon") : ""}</button>`;
      }).join("")}</div>`;
    }
    if (value.type === "chips") {
      return `<div class="chip-list">${value.items.map((item) => {
        const meta = typeof item === "string" ? { text: item, tone: "" } : item;
        return `<span class="chip ${meta.tone || ""}">${meta.text}</span>`;
      }).join("")}</div>`;
    }
    if (value.type === "checkbox") {
      const classes = ["checkbox", value.checked ? "checked" : "", value.mixed ? "mixed" : ""].filter(Boolean).join(" ");
      if (value.handler) {
        return `<button class="${classes}" data-handler="${registerHandler(value.handler)}" aria-label="选择"><span class="checkbox-mark" aria-hidden="true"></span></button>`;
      }
      return `<span class="${classes}"><span class="checkbox-mark" aria-hidden="true"></span></span>`;
    }
    if (value.type === "switch") return `<span class="switch"></span>`;
    if (value.type === "iconAction") {
      return `<button class="doc-inline-icon-btn ${value.tone || ""}" data-handler="${registerHandler(value.handler || { type: "noop" })}">${icon(value.icon, "doc-inline-icon")}</button>`;
    }
  }
  return `<div class="ellipsis">${value || ""}</div>`;
}

function renderPager(data) {
  if (!data) return "";
  const pageNums = paginationNums(data);
  return `
    <div class="pager">
      <span>共 ${data.total} 条记录</span>
      <span class="page-size">${data.size}${icon("chevron", "wj-icon tiny-icon")}</span>
      <button class="page-arrow" disabled>${icon("chevron")}</button>
      ${pageNums.map((num, index) => num === "..."
        ? `<span class="page-ellipsis">...</span>`
        : `<button class="page-num ${index === 0 ? "active" : ""}">${num}</button>`).join("")}
      <button class="page-arrow" style="transform:rotate(180deg)">${icon("chevron")}</button>
    </div>
  `;
}

function paginationNums(data) {
  const pageSize = Number.parseInt(String(data.size), 10) || 10;
  const total = Number.parseInt(String(data.total), 10) || 0;
  const pageCount = Math.max(Math.ceil(total / pageSize), data.nums?.length || 1);
  if (pageCount <= 7) return Array.from({ length: pageCount }, (_, index) => index + 1);
  return [1, 2, 3, 4, 5, "...", pageCount];
}

function renderFrontChatPage() {
  const chat = state.frontChat;
  const hasMessages = chat.conversations.length > 0;
  const classes = [
    "front-shell",
    chat.view === "chat" && !hasMessages ? "is-empty" : "",
    chat.view === "chat" && hasMessages ? "has-messages" : "",
    chat.filesPanel ? "with-file-panel" : "",
    `front-view-${chat.view}`,
  ].filter(Boolean).join(" ");
  return `
    <div class="${classes}">
      ${renderFrontSidebar()}
      <section class="front-workspace">
        ${renderFrontWorkspace()}
      </section>
      ${chat.filesPanel ? renderFrontFilesPanel() : ""}
    </div>
  `;
}

function renderFrontWorkspace() {
  const chat = state.frontChat;
  if (chat.view === "history") return renderFrontHistoryPage();
  if (chat.view === "experts") return renderFrontExpertsPage();
  if (chat.view === "automation") return renderFrontAutomationPage();
  if (chat.view === "files") return renderFrontFileLibraryPage();
  return renderFrontChatWorkspace();
}

function renderFrontSidebar() {
  const chat = state.frontChat;
  return `
    <aside class="front-sidebar">
      <div class="front-brand-row">
        <button class="front-logo" data-handler="${registerHandler({ type: "frontSwitchView", view: "chat" })}" aria-label="万卷首页">${icon("logoFull", "front-logo-icon", { width: "92px", height: "36px" })}</button>
        <div class="front-brand-actions">
          <button class="front-collapse" data-handler="${registerHandler({ type: "frontSwitchView", view: "history" })}" aria-label="搜索">${icon("filterSearch", "front-collapse-icon")}</button>
          <button class="front-collapse" aria-label="收起侧边栏">${icon("collapseList", "front-collapse-icon")}</button>
        </div>
      </div>
      <nav class="front-nav-list" aria-label="前台应用导航">
        ${FRONT_NAV.map((item) => `
          <button class="front-nav-item ${chat.view === item.id ? "active" : ""}" data-handler="${registerHandler(item.id === "chat" ? { type: "frontNewChat" } : { type: "frontSwitchView", view: item.id })}">
            ${icon(item.icon, "front-nav-icon")}
            <span>${item.label}</span>
          </button>
        `).join("")}
      </nav>
      <div class="front-history-head">
        <span>最近任务</span>
        <button data-handler="${registerHandler({ type: "frontSwitchView", view: "history" })}" aria-label="历史任务">${icon("filterCalendar", "front-history-clock")}</button>
      </div>
      <div class="front-history-list">
        ${FRONT_HISTORY.map((item) => `
          <button class="front-history-item ${chat.activeHistory === item.id ? "active" : ""}" data-handler="${registerHandler({ type: "frontLoadHistory", id: item.id })}">
            <span>${escapeHtml(item.title)}</span>
            <em>${item.dot ? `<i class="${item.dot}"></i>` : ""}${escapeHtml(item.time)}</em>
            <b class="front-history-edit">${icon("edit", "front-mini-svg")}${icon("trash", "front-mini-svg")}</b>
          </button>
        `).join("")}
      </div>
      <div class="front-userbar">
        <button class="front-user" data-handler="${registerHandler({ type: "drawer", title: "账号信息", fields: userFields() })}">
          <span class="front-user-avatar">杨</span>
          <span>杨文逸</span>
        </button>
        <button class="front-user-bell" aria-label="消息">${icon("info", "front-mini-svg")}</button>
      </div>
    </aside>
  `;
}

function renderFrontChatWorkspace() {
  const chat = state.frontChat;
  const hasMessages = chat.conversations.length > 0;
  return `
    ${hasMessages ? `
      <header class="front-thread-header">
        <strong>${escapeHtml(chat.conversations[0]?.prompt || "特斯拉25年Q4财报")}</strong>
        <button class="front-top-icon" data-handler="${registerHandler({ type: "frontShare" })}" aria-label="分享">${icon("uploadDoc", "front-top-svg")}</button>
      </header>
    ` : `<div class="front-home-glass" aria-hidden="true"></div>`}
    <div class="front-conversation">
      ${hasMessages ? renderFrontMessages() : renderFrontEmpty()}
    </div>
    ${hasMessages ? `<button class="front-floating-files ${chat.filesPanel ? "active" : ""}" data-handler="${registerHandler({ type: "frontToggleFiles" })}">${icon("treeFile", "front-mini-svg")} 任务文件</button>` : ""}
    ${hasMessages ? renderFrontComposer() : ""}
    <div class="front-disclaimer">以上内容为AI生成，请仔细鉴别重要信息</div>
  `;
}

function renderFrontEmpty() {
  return `
    <div class="front-empty">
      <h1>你好刘静，我可以帮你什么?</h1>
      <div class="front-mode-pills">
        <button class="${state.frontChat.mode === "chat" ? "active" : ""}" data-handler="${registerHandler({ type: "frontSetMode", mode: "chat" })}">${icon("frontThought", "front-mini-svg")}知识问答</button>
        <button class="${state.frontChat.mode === "agent" ? "active" : ""}" data-handler="${registerHandler({ type: "frontSetMode", mode: "agent" })}">${icon("write", "front-mini-svg")}深度写作</button>
        <button data-handler="${registerHandler({ type: "frontQuick", prompt: "帮我生成一份季度经营复盘PPT" })}">${icon("pptFile", "front-mini-svg")}PPT创作</button>
      </div>
      ${renderFrontComposer({ inline: true })}
    </div>
  `;
}

function renderFrontComposer(options = {}) {
  const chat = state.frontChat;
  const busy = chat.conversations.some((item) => item.loading);
  const ready = chat.input.trim() || busy;
  return `
    <div class="front-composer ${options.inline ? "inline" : ""}">
      <textarea data-front-input placeholder="有什么我可以帮助您的吗?">${escapeHtml(chat.input)}</textarea>
      <div class="front-composer-toolbar">
        <div class="front-tools">
          <button class="front-plus-btn" data-handler="${registerHandler({ type: "frontAttach" })}" aria-label="上传附件">+</button>
          <span class="front-tool-wrap">
            <button class="front-text-tool ${chat.composerMenu === "agent" ? "active" : ""}" data-handler="${registerHandler({ type: "frontToggleComposerMenu", menu: "agent" })}">
              ${icon("frontSparkle", "front-tool-icon")}<span>${chat.mode === "plan" ? "Plan" : chat.mode === "expert" ? chat.activeAgent : "Agent"}</span>${icon("filterChevron", "front-mini-svg")}
            </button>
            ${chat.composerMenu === "agent" ? renderFrontAgentMenu() : ""}
          </span>
          <span class="front-tool-wrap">
            <button class="front-text-tool ${chat.selectedSkill ? "selected" : ""} ${chat.composerMenu === "skill" ? "active" : ""}" data-handler="${registerHandler({ type: "frontToggleComposerMenu", menu: "skill" })}">
              ${icon("frontLightning", "front-tool-icon")}<span>${chat.selectedSkill ? "技能" : "技能"}</span>${chat.selectedSkill ? "<em>03</em>" : ""}${icon("filterChevron", "front-mini-svg")}
            </button>
            ${chat.composerMenu === "skill" ? renderFrontSkillMenu() : ""}
          </span>
          <button class="front-model-select">${icon("cube", "front-tool-icon")}<span>GLM-5.1</span>${icon("filterChevron", "front-mini-svg")}</button>
        </div>
        <div class="front-right-tools">
          <button class="front-tool-plain" data-handler="${registerHandler({ type: "frontToggleWeb" })}" aria-label="联网搜索">${icon("frontGlobe", "front-tool-icon")}</button>
          <button class="front-tool-plain" data-handler="${registerHandler({ type: "frontAttach" })}" aria-label="工具">${icon("tool", "front-tool-icon")}</button>
          <button class="front-send ${ready ? "ready" : ""} ${busy ? "stop" : ""}" data-handler="${registerHandler({ type: busy ? "frontStop" : "frontSend" })}" aria-label="${busy ? "停止生成" : "发送"}">
            ${icon(busy ? "frontStop" : "frontSend", "front-send-icon")}
          </button>
        </div>
      </div>
    </div>
  `;
}

function renderFrontAgentMenu() {
  return `
    <div class="front-agent-menu">
      <div class="front-agent-menu-left">
        ${[
          ["agent", "Agent", "frontSparkle"],
          ["plan", "Plan", "filter"],
          ["expert", "选择专家", "evaluate"],
        ].map(([mode, label, iconName]) => `
          <button class="${state.frontChat.mode === mode ? "active" : ""}" data-handler="${registerHandler({ type: "frontSetMode", mode })}">
            ${icon(iconName, "front-mini-svg")}<span>${label}</span>${mode === "expert" ? icon("frontChevronRight", "front-mini-svg") : "<em>i</em>"}
          </button>
        `).join("")}
      </div>
      <div class="front-agent-menu-right">
        <label><span>搜索专家</span>${icon("filterSearch", "front-mini-svg")}</label>
        ${FRONT_EXPERTS.slice(0, 5).map((item) => `
          <button data-handler="${registerHandler({ type: "frontSelectAgent", label: item.name })}">
            <i>${item.name.slice(0, 1)}</i><span>${escapeHtml(item.name)}</span>
          </button>
        `).join("")}
        <button class="front-agent-more" data-handler="${registerHandler({ type: "frontSwitchView", view: "experts" })}">在 专家 中查找更多 ${icon("uploadDoc", "front-mini-svg")}</button>
      </div>
    </div>
  `;
}

function renderFrontSkillMenu() {
  return `
    <div class="front-skill-menu">
      <label><span>搜索技能</span>${icon("filterSearch", "front-mini-svg")}</label>
      ${FRONT_SKILLS.map((name) => `
        <button class="${state.frontChat.selectedSkill === name ? "active" : ""}" data-handler="${registerHandler({ type: "frontSelectSkill", skill: name })}">
          <i>${icon("frontLightning", "front-mini-svg")}</i><span>${escapeHtml(name)}</span>${state.frontChat.selectedSkill === name ? icon("check", "front-mini-svg") : ""}
        </button>
      `).join("")}
    </div>
  `;
}

function renderFrontHistoryPage() {
  const groups = ["今天", "昨天", "更早"];
  return `
    <main class="front-list-page front-history-page">
      <div class="front-page-head">
        <div>
          <h2>历史任务</h2>
        </div>
        <label class="front-page-search"><span>搜索历史记录</span>${icon("filterSearch", "front-mini-svg")}</label>
      </div>
      <div class="front-history-table">
        ${groups.map((group) => `
          <section>
            <h3>${group}</h3>
            ${FRONT_HISTORY_FULL.filter((item) => item.group === group).map((item) => `
              <button class="front-history-row" data-handler="${registerHandler({ type: "frontLoadHistory", id: item.id })}">
                <span>${escapeHtml(item.title)}</span>
                <em>${escapeHtml(item.type)}</em>
                <strong>${escapeHtml(item.time)}</strong>
              </button>
            `).join("")}
          </section>
        `).join("")}
      </div>
    </main>
  `;
}

function renderFrontExpertsPage() {
  const chat = state.frontChat;
  const tabs = ["专家", "技能"];
  const categories = ["全部", "法务", "项目", "分析", "运营"];
  return `
    <main class="front-list-page front-experts-page">
      <div class="front-page-switch">
        ${tabs.map((tab) => `<button class="${chat.activeExpertTab === tab ? "active" : ""}" data-handler="${registerHandler({ type: "frontSetExpertTab", tab })}">${tab}</button>`).join("")}
      </div>
      <div class="front-page-head">
        <div>
          <h2>${chat.activeExpertTab}</h2>
          <div class="front-under-tabs">
            ${tabs.map((tab) => `<button class="${chat.activeExpertTab === tab ? "active" : ""}" data-handler="${registerHandler({ type: "frontSetExpertTab", tab })}">${tab}</button>`).join("")}
          </div>
        </div>
        <label class="front-page-search"><span>请输入关键字</span>${icon("filterSearch", "front-mini-svg")}</label>
      </div>
      <div class="front-category-tabs">
        ${categories.map((category) => `<button class="${chat.activeExpertCategory === category ? "active" : ""}" data-handler="${registerHandler({ type: "frontSetExpertCategory", category })}">${category}</button>`).join("")}
      </div>
      <div class="front-expert-grid">
        ${FRONT_EXPERTS.filter((item) => chat.activeExpertCategory === "全部" || item.category === chat.activeExpertCategory).map((item) => `
          <article class="front-expert-card">
            <div><i>${item.name.slice(0, 1)}</i><strong>${escapeHtml(item.name)}</strong></div>
            <p>${escapeHtml(item.desc)}</p>
            <span>${escapeHtml(item.tag)}</span>
            <button data-handler="${registerHandler({ type: "frontSelectExpertAndChat", label: item.name })}">选择</button>
          </article>
        `).join("")}
      </div>
    </main>
  `;
}

function renderFrontAutomationPage() {
  const chat = state.frontChat;
  const tabs = ["自动化列表", "执行历史"];
  return `
    <main class="front-list-page front-automation-page">
      <div class="front-page-head">
        <div>
          <h2>自动化</h2>
          <p>配置周期性自动化任务，查看执行历史与结果摘要</p>
        </div>
        <div class="front-page-actions">
          <span>点击对话创建跳转到对话页，会有预输入文本</span>
          <button data-handler="${registerHandler({ type: "frontAutomationChat" })}">${icon("frontThought", "front-mini-svg")}对话创建</button>
          <button class="primary" data-handler="${registerHandler({ type: "frontManualAutomation" })}">${icon("frontAttachment", "front-mini-svg")}手动创建</button>
        </div>
      </div>
      <div class="front-page-switch subtle">
        ${tabs.map((tab) => `<button class="${chat.activeAutomationTab === tab ? "active" : ""}" data-handler="${registerHandler({ type: "frontSetAutomationTab", tab })}">${tab}</button>`).join("")}
      </div>
      ${chat.activeAutomationTab === "执行历史" ? renderFrontAutomationHistory() : `
        <div class="front-automation-grid">
          ${FRONT_AUTOMATIONS.map((item) => `
            <article class="front-automation-card">
              <div class="front-automation-title">
                ${icon("filterCalendar", "front-mini-svg")}
                <strong class="${item.enabled ? "shiny" : ""}">${escapeHtml(item.title)}</strong>
                ${item.status ? `<em>${item.status}</em>` : ""}
                <button class="front-toggle ${item.enabled ? "on" : ""}" data-handler="${registerHandler({ type: "frontToggleAutomation", id: item.id })}"><span></span></button>
              </div>
              <p>专注高效响应咨询、解决需求，提供贴心便捷的一对一服务。</p>
              <dl>
                <div><dt>执行频率</dt><dd>每天 09:00</dd></div>
                <div><dt>生效周期</dt><dd>2026-06-01 至 2026-12-31</dd></div>
                <div><dt>执行专家</dt><dd>默认 Agent</dd></div>
              </dl>
              <div class="front-card-actions"><button>立即执行</button><button>删除</button></div>
            </article>
          `).join("")}
        </div>
      `}
    </main>
  `;
}

function renderFrontAutomationHistory() {
  return `
    <div class="front-history-table compact">
      ${["每日合同风险巡检", "每日经营简报", "重要邮件摘要"].map((name, index) => `
        <button class="front-history-row">
          <span>${name}</span>
          <em>${index === 0 ? "执行成功" : "执行中"}</em>
          <strong>今天 09:0${index}</strong>
        </button>
      `).join("")}
    </div>
  `;
}

function renderFrontFileLibraryPage() {
  const chat = state.frontChat;
  return `
    <main class="front-list-page front-library-page">
      <div class="front-page-head">
        <div>
          <h2>文件库</h2>
          <p>集中管理我的文件与对话生成物，可下载并定位到对应上下文</p>
        </div>
        <label class="front-page-search"><span>搜索文件</span>${icon("filterSearch", "front-mini-svg")}</label>
      </div>
      <div class="front-page-switch subtle">
        ${["全部", "仅最近 7 天"].map((filter) => `<button class="${chat.activeFileFilter === filter ? "active" : ""}" data-handler="${registerHandler({ type: "frontSetFileFilter", filter })}">${filter}</button>`).join("")}
      </div>
      <div class="front-library-groups">
        ${FRONT_FILE_GROUPS.map((group) => `
          <section class="front-library-group">
            <div class="front-library-group-head"><strong>${escapeHtml(group.title)}</strong><span>${escapeHtml(group.meta)}</span></div>
            ${group.files.map((fileId) => {
              const file = FRONT_TASK_FILES.find((item) => item.id === fileId) || FRONT_TASK_FILES[0];
              return renderFrontLibraryFile(file);
            }).join("")}
          </section>
        `).join("")}
      </div>
    </main>
  `;
}

function renderFrontMessages() {
  return state.frontChat.conversations.map(renderFrontMessage).join("");
}

function renderFrontMessage(message) {
  return `
    <article class="front-message">
      <div class="front-user-bubble">${escapeHtml(message.prompt)}</div>
      ${message.loading ? renderFrontLoading(message) : (message.kind === "chat" ? renderFrontChatAnswer(message) : renderFrontAgentAnswer(message))}
    </article>
  `;
}

function renderFrontLoading(message) {
  return `
    <div class="front-thinking loading">
      <div class="front-thinking-title">${icon("frontThought", "front-mini-svg")} 正在思考 <span></span></div>
      <div class="front-loading-text">我会先确认任务边界，再调用网页、知识库、工具与技能完成信息核验。</div>
      <div class="front-loading-dots"><i></i><i></i><i></i><i></i></div>
    </div>
  `;
}

function renderFrontAgentAnswer(message) {
  const collapsed = state.frontChat.thinkingCollapsed;
  return `
    <section class="front-agent-answer">
      <button class="front-thinking-toggle" data-handler="${registerHandler({ type: "frontToggleThinking" })}">
        ${icon("frontThought", "front-mini-svg")} 思考过程 ${icon("filterChevron", "front-mini-svg")}
      </button>
      ${collapsed ? "" : `
        <div class="front-search-strip">${icon("frontGlobe", "front-mini-svg")} 浏览网页｜大模型技术发展趋势 2025 2026 大模型应用场景 企业落地 大模型产业...</div>
        <p class="front-reasoning">我会先确认任务边界，再调用网页、知识库、工具与技能完成信息核验，随后将结果整理为可交付内容。</p>
        <div class="front-tool-step">${icon("tool", "front-mini-svg")} 读取技能 "天气查询"</div>
        <div class="front-tool-step">${icon("treeFile", "front-mini-svg")} 列出相关任务文件</div>
        <div class="front-todo-card">
          <strong>${icon("filter", "front-mini-svg")} 待办事项 <em>5</em></strong>
          <p class="done">明确需求：了解具体功能和触发场景</p>
          <p class="done">检索知识库与网页内容</p>
          <p>设计输出结构并生成结果</p>
        </div>
      `}
      ${renderFrontFinalAnswer(message)}
    </section>
  `;
}

function renderFrontChatAnswer(message) {
  return `
    <section class="front-chat-answer">
      <button class="front-thinking-toggle" data-handler="${registerHandler({ type: "frontToggleThinking" })}">
        ${icon("frontThought", "front-mini-svg")} 思考过程 ${icon("filterChevron", "front-mini-svg")}
      </button>
      ${state.frontChat.thinkingCollapsed ? "" : `
        <div class="front-search-strip">${icon("frontGlobe", "front-mini-svg")} 浏览网页｜大模型技术发展趋势 2025 2026 大模型应用场景 企业落地 大模型产业...</div>
        ${state.frontChat.selectedKnowledge ? `
          <div class="front-knowledge-card">
            <div><strong>${icon("treeFile", "front-mini-svg")} 文档</strong><button>查看所有切片</button></div>
            <p>我检索到知识库文档有 10 个相关内容</p>
            <div class="front-doc-grid">${Array.from({ length: 8 }, (_, index) => `<span>${icon("treeFile", "front-mini-svg")} 政策文件汇编.doc</span>`).join("")}</div>
          </div>
        ` : ""}
        <p class="front-reasoning">太好了！我已经检索到相关知识，并整理出可溯源的回答。</p>
      `}
      ${renderFrontFinalAnswer(message)}
    </section>
  `;
}

function renderFrontFinalAnswer(message) {
  if (message.intent === "skill") {
    return `
      <div class="front-final">
        <h3>项目周报 project-weekly-report Skill 创建完成</h3>
        <p>文件结构、核心特性、关键设计亮点与打包文件已生成，支持后续在智能体中直接调用。</p>
        <div class="front-code-block">
          <div class="front-code-head">text 文本 ${icon("frontCopy", "front-code-copy")}</div>
          <pre>project-weekly-report/
├── SKILL.md
├── references/
│   ├── weekly-report-template.md
│   └── phrase-reference.md
└── scripts/</pre>
        </div>
        <h4>核心特性</h4>
        <table class="front-mini-table"><tbody><tr><td>触发词</td><td>周报、项目周报、weekly report</td></tr><tr><td>输出格式</td><td>专业排版的 Word 文档</td></tr><tr><td>数据真实性保护</td><td>严格处理来源，避免编造信息</td></tr></tbody></table>
        <div class="front-file-row">${renderFrontResultFile("project-weekly-report.skill", "txtFile")}${renderFrontResultFile("project-weekly-report1.skill", "txtFile")}</div>
      </div>
    `;
  }
  return `
    <div class="front-final">
      <h3>一、完整的分析文本内容（Markdown 格式）</h3>
      <div class="front-code-block">
        <div class="front-code-head">markdown ${icon("frontCopy", "front-code-copy")}</div>
        <pre>def evaluate(input, output, reference_output=None):
    """
    评估输入文本与输出文本的相似度
    返回值: 0.0-1.0 之间的分数，1.0 表示完全相同
    """</pre>
      </div>
      <h3>二、包含全部文案的 docx 文件</h3>
      <p>已成功生成 tesla_q4_2025_analysis.docx 文档，该文件包含了上述完整的分析内容，并已保存在 ./output_1/ 目录中。</p>
      <h4>关键发现总结</h4>
      <p>特斯拉2025年Q4财报揭示了几个重要趋势：</p>
      <p>1. 历史性拐点：首次出现年度营收下滑，标志着公司增长模式发生根本性变化</p>
      <p>2. 汽车主业承压：交付量连续两年下滑，营收占比从80%降至71%</p>
      <p>3. 盈利能力挑战：净利润同比暴跌61%，运营费用增长23%严重侵蚀利润</p>
      <p>4. 业务结构转型：能源业务和服务业务成为新的增长点</p>
      <p>5. 战略方向调整：从纯汽车制造商向AI+机器人公司转型，包括停产Model S/X、发展Robotaxi和Optimus机器人</p>
      <div class="front-file-row">
        ${renderFrontResultFile("特斯拉25年Q4财报", "wordFile", "word")}
        ${renderFrontResultFile("特斯拉25年Q4财报", "mdFile", "md")}
      </div>
      <div class="front-answer-meta">
        <span class="front-answer-meta-item">${icon("frontSparkle", "front-answer-meta-icon front-sparkle-icon")} GLM-4.7</span>
        <span class="front-answer-meta-item">${icon("frontLightning", "front-answer-meta-icon front-lightning-icon")} 1min 30s</span>
        <button data-handler="${registerHandler({ type: "frontToggleToken" })}">${icon("frontToken", "front-answer-meta-icon")} Token 5,635 ${icon("frontChevronRight", "front-answer-chevron")}</button>
      </div>
      ${state.frontChat.tokenOpen ? `<div class="front-token-card"><strong>Token 消耗详情</strong><div><span>提示词 (Prompt)</span><em>95</em></div><div><span>回复 (Completion)</span><em>2,470</em></div><div><span>总计 (Total)</span><em>2,565</em></div><div><span>缓存命中 (Cached)</span><em>-</em></div></div>` : ""}
      <div class="front-answer-actions">
        <button>${icon("frontActionRefresh", "front-answer-action-icon")}</button>
        <span class="front-action-divider"></span>
        <button>${icon("frontActionLike", "front-answer-action-icon")}</button>
        <button>${icon("frontActionDislike", "front-answer-action-icon")}</button>
        <button>${icon("frontCopy", "front-answer-action-icon")}</button>
        <button>${icon("frontActionShare", "front-answer-action-icon")}</button>
      </div>
      <div class="front-suggestions">${FRONT_SUGGESTIONS.map((text) => `<button data-handler="${registerHandler({ type: "frontQuick", prompt: text })}">${escapeHtml(text)} <span>→</span></button>`).join("")}</div>
    </div>
  `;
}

function renderFrontSourceTag(label) {
  return `<button class="front-source-tag" data-handler="${registerHandler({ type: "frontToggleSource", label })}">${label}</button>${state.frontChat.sourceOpen === label ? `<span class="front-source-pop"><em>${icon("uploadDoc", "front-source-icon")} 天气中气爱</em><strong>天气中气爱发布近七日天气情况，周五夜间有风...</strong><span>天气中气爱发布近七日天气情况，周五夜间有大风红色预警...</span></span>` : ""}`;
}

function renderFrontResultFile(name, fileIcon, tone = "word") {
  return `
    <button class="front-result-file" data-handler="${registerHandler({ type: "frontOpenFile", id: tone === "md" ? "md" : "word" })}">
      <span class="file-type-icon ${tone}">${icon(fileIcon, "wj-icon")}</span>
      <span><strong>${escapeHtml(name)}</strong><em>创建时间：2026-03-10 16:00:00</em></span>
      <b data-handler="${registerHandler({ type: "frontDownloadFile", id: tone })}">${icon("frontDownload", "front-mini-svg")}</b>
    </button>
  `;
}

function renderFrontFilesPanel() {
  const chat = state.frontChat;
  return `
    <aside class="front-files-panel">
      <div class="front-files-head">
        <strong>${chat.fileDetail ? "特斯拉25年Q4财报" : "此任务中的所有文件"}</strong>
        <div><button>${icon("addSquare", "front-mini-svg")}</button><button data-handler="${registerHandler({ type: "frontCloseFiles" })}">${icon("close", "front-mini-svg")}</button></div>
      </div>
      ${chat.fileDetail ? renderFrontFileDetail(chat.fileDetail) : `
        <div class="front-files-tabs"><button class="active">AI 生成的</button><button>我上传的</button></div>
        <div class="front-files-filter"><div>请输入关键词 ${icon("filterSearch", "front-mini-svg")}</div><button>请选择文件类型 ${icon("filterChevron", "front-mini-svg")}</button></div>
        <div class="front-file-group">今天</div>
        ${FRONT_TASK_FILES.slice(0, 3).map(renderFrontTaskFile).join("")}
        <div class="front-file-group">昨天</div>
        ${FRONT_TASK_FILES.slice(3, 5).map(renderFrontTaskFile).join("")}
        <div class="front-file-group">更早</div>
        ${FRONT_TASK_FILES.slice(5).map(renderFrontTaskFile).join("")}
        <div class="front-files-foot"><label><input type="checkbox"> 全选</label><span>${chat.selectedFiles.size} 个已选</span><button>取消</button><button class="primary">批量下载</button></div>
      `}
    </aside>
  `;
}

function renderFrontTaskFile(file) {
  const selected = state.frontChat.selectedFiles.has(file.id);
  return `
    <div class="front-task-file ${selected ? "selected" : ""}">
      <button class="front-file-check" data-handler="${registerHandler({ type: "frontToggleFileSelect", id: file.id })}"></button>
      <button class="front-file-main" data-handler="${registerHandler({ type: "frontOpenFile", id: file.id })}">
        <span class="file-type-icon ${file.tone}">${icon(file.type, "wj-icon")}</span>
        <span><strong>${escapeHtml(file.name)}</strong><em>${escapeHtml(file.time)}</em></span>
      </button>
      <button class="front-file-more" data-handler="${registerHandler({ type: "frontFileMenu", id: file.id })}">${icon("frontMore", "front-mini-svg")}</button>
      ${state.frontChat.filesPanel === `menu:${file.id}` ? `<div class="front-file-menu"><button data-handler="${registerHandler({ type: "frontLocateFile", id: file.id })}">在聊天中定位</button><button>下载</button></div>` : ""}
    </div>
  `;
}

function renderFrontLibraryFile(file) {
  return `
    <div class="front-library-file">
      <button class="front-library-main" data-handler="${registerHandler({ type: "frontOpenLibraryFile", id: file.id })}">
        <span class="file-type-icon ${file.tone}">${icon(file.type, "wj-icon")}</span>
        <span><strong>${escapeHtml(file.fileName || file.name)}</strong><em>${escapeHtml(file.format)} · 200.00 KB</em></span>
      </button>
      <span>${escapeHtml(file.time)}</span>
      <button data-handler="${registerHandler({ type: "frontOpenLibraryFile", id: file.id })}" aria-label="在线查看">${icon("frontGlobe", "front-mini-svg")}</button>
      <button data-handler="${registerHandler({ type: "frontDownloadFile", id: file.id })}" aria-label="下载">${icon("frontDownload", "front-mini-svg")}</button>
    </div>
  `;
}

function renderFrontFileDetail(id) {
  const file = FRONT_TASK_FILES.find((item) => item.id === id) || FRONT_TASK_FILES[0];
  return `
    <div class="front-file-detail">
      <button class="front-file-back" data-handler="${registerHandler({ type: "frontBackFileList" })}">‹ 返回</button>
      <div class="front-pdf-toolbar"><span>1 / 5</span><button>-</button><button>+</button><button>${icon("calendarPrev", "front-mini-svg")}</button><button>${icon("frontDownload", "front-mini-svg")}</button><button>${icon("frontMore", "front-mini-svg")}</button></div>
      <div class="front-doc-pages">
        ${[1, 2].map((page) => `
          <div class="front-doc-preview">
            <div class="front-doc-corner top-left"></div>
            <div class="front-doc-corner top-right"></div>
            <h3>购买建议指南</h3>
            <h4>8 万 - 15 万元 价位精选</h4>
            <p>2026 年版｜混燃纯电动 · 插电混动 · 增程式</p>
            <small>第 ${page} 页｜智能分析 © 2026｜仅供参考</small>
          </div>
        `).join("")}
      </div>
    </div>
  `;
}

function renderDrawer() {
  const drawer = state.drawer;
  let customHtml = "";
  if (drawer.opsKind === "agentDetail") customHtml = opsAgentDetailHtml(drawer.name);
  if (drawer.opsKind === "auditDetail") customHtml = opsAuditDetailHtml(drawer.id);
  if (drawer.opsKind === "userSecurity") customHtml = opsUserSecurityHtml(drawer.name);
  const hasCustomHtml = Boolean(customHtml);
  const drawerClass = drawer.opsKind === "auditDetail" ? " audit-drawer" : (hasCustomHtml ? " ops-drawer" : "");
  return `
    <div class="drawer-mask" data-handler="${registerHandler({ type: "closeDrawer" })}"></div>
    <aside class="drawer${drawerClass}">
      <div class="drawer-head">
        <span>${drawer.title}</span>
        <button class="icon-btn" data-handler="${registerHandler({ type: "closeDrawer" })}">${icon("close")}</button>
      </div>
      <div class="drawer-body">
        ${hasCustomHtml
          ? customHtml
          : drawer.fields.map((item) => `
          <div class="form-row">
            <div class="muted">${item.label}</div>
            ${item.multiline ? `<div class="fake-textarea"></div>` : `<div class="fake-input"></div>`}
          </div>
        `).join("")}
      </div>
      ${hasCustomHtml ? "" : `
      <div class="drawer-foot">
        <button class="btn" data-handler="${registerHandler({ type: "closeDrawer" })}">取消</button>
        <button class="btn primary" data-handler="${registerHandler({ type: "closeDrawer" })}">确定</button>
      </div>`}
    </aside>
  `;
}

function frontFields() {
  return [{ label: "应用名称" }, { label: "访问地址" }, { label: "说明", multiline: true }];
}

function userFields() {
  return [{ label: "账号" }, { label: "用户名" }, { label: "所属部门" }, { label: "手机号" }];
}

function modelFields(cardData) {
  return [{ label: "模型名称" }, { label: "模型编码" }, { label: "模型类型" }, { label: "说明", multiline: true }];
}

function detailFields(cardData) {
  return [{ label: "名称" }, { label: "归属信息" }, { label: "描述", multiline: true }];
}

function actionFields(label) {
  if (label.includes("密码")) return [{ label: "新密码" }, { label: "确认密码" }];
  if (label.includes("导入") || label.includes("上传")) return [{ label: "文件上传" }, { label: "备注", multiline: true }];
  return [{ label: "名称" }, { label: "说明", multiline: true }];
}

function drawerMeta(label) {
  return { type: "drawer", title: label, fields: actionFields(label) };
}

function handleFrontAction(meta) {
  const chat = state.frontChat;
  if (meta.type === "frontSwitchView") {
    chat.view = meta.view;
    chat.composerMenu = "";
    if (meta.view !== "chat") {
      chat.filesPanel = null;
      chat.fileDetail = "";
    }
    render();
    return;
  }
  if (meta.type === "frontSetMode") {
    chat.mode = meta.mode;
    if (meta.mode !== "agent") chat.selectedSkill = "";
    chat.composerMenu = "";
    render();
    return;
  }
  if (meta.type === "frontToggleComposerMenu") {
    chat.composerMenu = chat.composerMenu === meta.menu ? "" : meta.menu;
    render();
    return;
  }
  if (meta.type === "frontSelectAgent") {
    chat.activeAgent = meta.label;
    chat.mode = "expert";
    chat.selectedSkill = "";
    chat.composerMenu = "";
    render();
    return;
  }
  if (meta.type === "frontSelectSkill") {
    chat.selectedSkill = chat.selectedSkill === meta.skill ? "" : meta.skill;
    chat.mode = "agent";
    chat.composerMenu = "";
    render();
    return;
  }
  if (meta.type === "frontSetExpertTab") {
    chat.activeExpertTab = meta.tab;
    render();
    return;
  }
  if (meta.type === "frontSetExpertCategory") {
    chat.activeExpertCategory = meta.category;
    render();
    return;
  }
  if (meta.type === "frontSelectExpertAndChat") {
    chat.activeAgent = meta.label;
    chat.mode = "expert";
    chat.view = "chat";
    chat.input = `请使用${meta.label}帮我处理当前任务`;
    render();
    return;
  }
  if (meta.type === "frontSetAutomationTab") {
    chat.activeAutomationTab = meta.tab;
    render();
    return;
  }
  if (meta.type === "frontToggleAutomation") {
    const item = FRONT_AUTOMATIONS.find((entry) => entry.id === meta.id);
    if (item) item.enabled = !item.enabled;
    render();
    return;
  }
  if (meta.type === "frontAutomationChat") {
    chat.view = "chat";
    chat.input = "帮我创建一个每日合同风险巡检自动化任务";
    render();
    return;
  }
  if (meta.type === "frontManualAutomation") {
    openDrawer("新建自动化任务", [{ label: "任务名称" }, { label: "执行频率" }, { label: "执行专家" }, { label: "任务说明", multiline: true }]);
    return;
  }
  if (meta.type === "frontSetFileFilter") {
    chat.activeFileFilter = meta.filter;
    render();
    return;
  }
  if (meta.type === "frontNewChat") {
    chat.view = "chat";
    chat.activeHistory = "";
    chat.input = "";
    chat.composerMenu = "";
    chat.selectedSkill = "";
    chat.filesPanel = null;
    chat.fileDetail = "";
    chat.tokenOpen = false;
    chat.sourceOpen = "";
    chat.thinkingCollapsed = false;
    chat.conversations = [];
    render();
    return;
  }
  if (meta.type === "frontLoadHistory") {
    chat.activeHistory = meta.id;
    chat.view = "chat";
    chat.mode = meta.id.includes("weather") ? "chat" : "agent";
    const history = [...FRONT_HISTORY, ...FRONT_HISTORY_FULL].find((item) => item.id === meta.id);
    chat.conversations = [
      {
        id: `history-${meta.id}`,
        prompt: history?.title || "特斯拉25年Q4财报",
        kind: chat.mode,
        intent: "report",
        loading: false,
      },
    ];
    render();
    return;
  }
  if (meta.type === "frontQuick") {
    chat.input = meta.prompt;
    submitFrontChat();
    return;
  }
  if (meta.type === "frontSend") {
    submitFrontChat();
    return;
  }
  if (meta.type === "frontStop") {
    chat.conversations = chat.conversations.map((item) => item.loading ? { ...item, loading: false } : item);
    render();
    return;
  }
  if (meta.type === "frontToggleKnowledge") {
    chat.selectedKnowledge = !chat.selectedKnowledge;
    render();
    return;
  }
  if (meta.type === "frontToggleWeb" || meta.type === "frontAttach" || meta.type === "frontShare") {
    chat.composerMenu = "";
    render();
    return;
  }
  if (meta.type === "frontToggleThinking") {
    chat.thinkingCollapsed = !chat.thinkingCollapsed;
    render();
    return;
  }
  if (meta.type === "frontToggleToken") {
    chat.tokenOpen = !chat.tokenOpen;
    render();
    return;
  }
  if (meta.type === "frontToggleSource") {
    chat.sourceOpen = chat.sourceOpen === meta.label ? "" : meta.label;
    render();
    return;
  }
  if (meta.type === "frontToggleFiles") {
    chat.filesPanel = chat.filesPanel ? null : "list";
    chat.fileDetail = "";
    render();
    return;
  }
  if (meta.type === "frontCloseFiles") {
    chat.filesPanel = null;
    chat.fileDetail = "";
    render();
    return;
  }
  if (meta.type === "frontToggleFileSelect") {
    if (chat.selectedFiles.has(meta.id)) chat.selectedFiles.delete(meta.id);
    else chat.selectedFiles.add(meta.id);
    if (chat.filesPanel?.startsWith("menu:")) chat.filesPanel = "list";
    render();
    return;
  }
  if (meta.type === "frontOpenFile") {
    chat.filesPanel = "list";
    chat.fileDetail = meta.id;
    render();
    return;
  }
  if (meta.type === "frontOpenLibraryFile") {
    chat.view = "chat";
    chat.filesPanel = "list";
    chat.fileDetail = meta.id;
    if (!chat.conversations.length) {
      chat.conversations = [{
        id: `library-${meta.id}`,
        prompt: "特斯拉25年Q4财报",
        kind: "agent",
        intent: "report",
        loading: false,
      }];
    }
    render();
    return;
  }
  if (meta.type === "frontDownloadFile") {
    render();
    return;
  }
  if (meta.type === "frontBackFileList") {
    chat.fileDetail = "";
    chat.filesPanel = "list";
    render();
    return;
  }
  if (meta.type === "frontFileMenu") {
    chat.filesPanel = chat.filesPanel === `menu:${meta.id}` ? "list" : `menu:${meta.id}`;
    render();
    return;
  }
  if (meta.type === "frontLocateFile") {
    chat.filesPanel = "list";
    chat.sourceOpen = "网页1";
    render();
  }
}

function submitFrontChat() {
  const chat = state.frontChat;
  const prompt = chat.input.trim();
  if (!prompt) return;
  const id = `front-${Date.now()}`;
  const intent = /skill|技能|周报/i.test(prompt) ? "skill" : "weather";
  chat.conversations.push({
    id,
    prompt,
    kind: chat.mode === "chat" ? "chat" : "agent",
    intent,
    loading: true,
  });
  chat.input = "";
  chat.view = "chat";
  chat.composerMenu = "";
  chat.tokenOpen = false;
  chat.sourceOpen = "";
  chat.thinkingCollapsed = false;
  render();
  setTimeout(() => {
    const item = chat.conversations.find((conversation) => conversation.id === id);
    if (item) item.loading = false;
    render();
  }, 900);
}

document.addEventListener("click", (event) => {
  const directConfigTarget = event.target.closest(".doc-config-trigger[data-doc-config-id]");
  if (directConfigTarget) {
    event.preventDefault();
    openDocConfigView("single", [directConfigTarget.dataset.docConfigId]);
    return;
  }
  const target = event.target.closest("[data-handler]");
  if (!target) {
    if (!event.target.closest(".filter-control-wrap") && !event.target.closest(".more-filter-wrap")) {
      if (state.filterMenuKey || state.filterControlKey) {
        state.filterMenuKey = "";
        state.filterControlKey = "";
        render();
      }
    }
    if (!event.target.closest(".doc-row-more-wrap") && state.docManagement.rowMenu) {
      state.docManagement.rowMenu = "";
      render();
    }
    return;
  }
  event.preventDefault();
  const meta = state.handlers[target.dataset.handler];
  if (!meta) {
    return;
  }
  if (meta.type?.startsWith("front")) {
    handleFrontAction(meta);
    return;
  }
  if (meta.type !== "toggleMoreFilters") state.filterMenuKey = "";
  if (meta.type === "nav") navigate(meta.path);
  if (meta.type === "group") toggleGroup(meta.label);
  if (meta.type === "closeTab") closeTab(meta.path);
  if (meta.type === "drawer") openDrawer(meta.title, meta.fields);
  if (meta.type === "closeDrawer") closeDrawer();
  if (meta.type === "opsSortAgent") {
    const prev = opsState._agentSort;
    if (prev && prev.col === meta.col) {
      prev.dir = prev.dir === "asc" ? "desc" : "asc";
    } else {
      opsState._agentSort = { col: meta.col, dir: "desc" };
    }
    render();
  }
  if (meta.type === "opsUserDrillUp") { opsState._userDrillDept = null; render(); }
  if (meta.type === "opsDrillUp") { opsState._drillDept = null; render(); }
  if (meta.type === "opsRankUp") { opsState._rankDept = null; render(); }
  if (meta.type === "opsRankDrill") { opsState._rankDept = meta.dept; render(); }
  if (meta.type === "opsResDeptPage") {
    const pages = Math.ceil(RES_DEPTS.length / RES_LEGEND_PER_PAGE);
    opsState._resDeptPage = Math.min(pages - 1, Math.max(0, (opsState._resDeptPage || 0) + meta.dir));
    render();
  }
  if (meta.type === "opsSetTrendDim") { opsState._trendDim = meta.dim === "type" ? "type" : "dept"; render(); }
  if (meta.type === "opsSetAgentDetailTab") {
    opsState._detailTab = meta.tab === "auto" ? "auto" : "chat";
    if (meta.tab === "auto") opsState._detailPageAuto = 1; else opsState._detailPageChat = 1;
    render();
  }
  if (meta.type === "opsDetailPage") {
    const key = meta.tab === "auto" ? "_detailPageAuto" : "_detailPageChat";
    opsState[key] = Math.max(1, meta.page || 1);
    render();
  }
  if (meta.type === "opsCalcRoi") {
    opsState._detailPageChat = opsState._detailPageChat || 1;
    render();
  }
  if (meta.type === "opsAgentCalcRoi") {
    opsState._agentRoiSeed = (opsState._agentRoiSeed || 0) + 1;
    render();
  }
  if (meta.type === "opsAgentRoiModal") {
    opsState._agentRoiModal = { name: meta.name, manualTime: "", agentTime: "" };
    render();
  }
  if (meta.type === "opsAgentRoiClose") {
    opsState._agentRoiModal = null;
    render();
  }
  if (meta.type === "opsAgentRoiConfirm") {
    const m = opsState._agentRoiModal;
    if (!m) return;
    const manual = Number(m.manualTime);
    const agent = Number(m.agentTime);
    if (!manual || manual <= 0 || !agent || agent <= 0) {
      // 输入校验，给一个轻量提示（可以用 toast）
      opsState._agentRoiModal = { ...m, error: "请输入有效的人工用时与专家用时（均需大于 0）" };
      render();
      return;
    }
    const roi = ((manual - agent) / manual * 100).toFixed(1) + "%";
    opsState._agentRoiResults[m.name] = roi;
    opsState._agentRoiModal = null;
    render();
  }
  if (meta.type === "opsSetTab") { opsState.tab = meta.tab; render(); }
  if (meta.type === "opsSetRange") { opsState.rangeKey = meta.range; render(); }
  if (meta.type === "opsUserResetRange") {
    opsState.rangeKey = "today";
    opsState.userStart = "";
    opsState.userEnd = "";
    opsState.userPage = 1;
    render();
  }
  if (meta.type === "opsUserPage") {
    const pageCount = Math.max(1, Math.ceil(OPS_USER_LIST.length / 10));
    opsState.userPage = Math.min(pageCount, Math.max(1, meta.page));
    render();
  }
  if (meta.type === "opsUserSecurity") {
    state.drawer = { title: `${meta.user} · 安全分析`, opsKind: "userSecurity", name: meta.user };
    render();
  }
  if (meta.type === "opsAgentDetail") {
    opsState._detailPageChat = 1;
    opsState._detailPageAuto = 1;
    state.drawer = { title: meta.name + " · 专家详情", opsKind: "agentDetail", name: meta.name };
    render();
  }
  if (meta.type === "opsAuditDetail") { state.drawer = { title: "审计日志详情", opsKind: "auditDetail", id: meta.id }; render(); }
  if (meta.type === "opsAuditModal") { opsState._auditModal = meta.modal; render(); }
  if (meta.type === "opsAuditCloseModal") { opsState._auditModal = ""; render(); }
  if (meta.type === "opsAuditQuery") {
    opsState.auditApplied = { ...opsState.auditFilter };
    opsState.auditPage = 1;
    render();
    opsAuditToast(`已查询到 ${opsAuditRows().length} 条日志`);
  }
  if (meta.type === "opsAuditReset") {
    opsState.auditFilter = { time: "7d", operator: "", type: "all", result: "all" };
    opsState.auditApplied = { ...opsState.auditFilter };
    opsState.auditPage = 1;
    render();
    opsAuditToast("筛选条件已重置");
  }
  if (meta.type === "opsAuditRefresh") {
    render();
    opsAuditToast("日志列表已刷新");
  }
  if (meta.type === "opsAuditConfirmExport") {
    const rows = opsAuditRows();
    opsExportCsv("审计日志.csv", ["操作时间", "操作人", "操作类型", "操作对象", "操作内容", "来源 IP", "结果"], rows.map((row) => [row.time, row.user, row.type, row.object, row.content, row.ip, row.result]));
    opsState._auditModal = "";
    render();
    opsAuditToast("导出任务已创建，请稍后查看下载文件");
  }
  if (meta.type === "opsAuditSaveRetention") {
    const input = document.querySelector("[data-audit-retention]");
    const days = Number(input?.value || opsState.retentionDays);
    if (!Number.isFinite(days) || days < 30 || days > 3650) {
      opsAuditToast("请输入 30～3650 天");
    } else {
      const before = opsState.retentionDays;
      opsState.retentionDays = Math.round(days);
      OPS_AUDIT_LOGS.unshift({
        time: "2026-09-02 16:02:11", user: "杨明", account: "yangming", type: "系统配置变更", object: "参数设置",
        content: `修改审计日志保留期限：${before} 天 → ${opsState.retentionDays} 天`, ip: "10.18.32.46", result: "成功",
        id: `AUD-20260902-${String(OPS_AUDIT_LOGS.length + 1279).padStart(6, "0")}`, before: `${before} 天`, after: `${opsState.retentionDays} 天`,
      });
      opsState.auditApplied = { ...opsState.auditFilter };
      opsState._auditModal = "";
      render();
      opsAuditToast("保留策略已保存，并写入审计日志");
    }
  }
  if (meta.type === "opsAuditSaveRange") {
    const r = opsState._auditRange;
    if (r.preset === "custom") {
      if (!r.start || !r.end) {
        opsAuditToast("请选择开始日期与结束日期");
        return;
      }
      if (r.start > r.end) {
        opsAuditToast("开始日期不能晚于结束日期");
        return;
      }
    }
    const presetLabel = ({ today: "今天", "7d": "近 7 天", "30d": "近 30 天", "90d": "近 90 天", "180d": "近 180 天", custom: `${r.start} 至 ${r.end}` })[r.preset] || r.preset;
    OPS_AUDIT_LOGS.unshift({
      time: "2026-09-03 15:10:22", user: "杨明", account: "yangming", type: "系统配置变更", object: "审计期限配置",
      content: `修改审计期限配置：${presetLabel}（导出应用：${r.applyToExport ? "是" : "否"}）`, ip: "10.18.32.46", result: "成功",
      id: `AUD-20260903-${String(OPS_AUDIT_LOGS.length + 1401).padStart(6, "0")}`, before: "—", after: presetLabel,
    });
    if (r.preset !== "custom") {
      // 将期限预设同步到审计筛选的 time 维度，让列表立即体现
      opsState.auditFilter = { ...opsState.auditFilter, time: r.preset };
      opsState.auditApplied = { ...opsState.auditFilter };
      opsState.auditPage = 1;
    }
    opsState._auditModal = "";
    render();
    opsAuditToast(`审计期限已更新为：${presetLabel}`);
  }
  if (meta.type === "opsExport") {
    if (meta.which === "users") {
      const rows = OPS_USER_LIST.slice().sort((a, b) => b.tokens - a.tokens).map((u, i) => [
        i + 1, u.user, u.dept, (u.tokens * opsRangeMult()).toFixed(1) + " 亿", opsCost(u.tokens * opsRangeMult()) + " 元",
      ]);
      opsExportCsv("用户Token消耗.csv", ["排名", "用户", "所属部门", "Token消耗", "费用消耗"], rows);
    } else if (meta.which === "agents") {
      const rows = OPS_AGENT_LIST.slice().sort((a, b) => b.tokens - a.tokens).map((a) => [
        a.name, a.type, a.dept, Math.round(a.calls * opsRangeMult()) + " 次", (a.tokens * opsRangeMult()).toFixed(1) + " 亿", opsCost(a.tokens * opsRangeMult()) + " 元", a.success.toFixed(1) + "%", a.latency.toFixed(2) + " s",
      ]);
      opsExportCsv("专家列表.csv", ["专家名称", "类型", "所属部门", "调用量", "Token消耗", "费用消耗", "成功率", "平均耗时"], rows);
    }
  }
  if (meta.type === "opsApplyCustomRange") {
    const sEl = document.querySelector("[data-ops-date='start']");
    const eEl = document.querySelector("[data-ops-date='end']");
    opsState.rangeKey = "custom";
    opsState.customStart = sEl ? sEl.value : opsState.customStart;
    opsState.customEnd = eEl ? eEl.value : opsState.customEnd;
    render();
  }
  if (meta.type === "pill") {
    state.pageViews[meta.path] = meta.value;
    render();
  }
  if (meta.type === "toggleMoreFilters") {
    state.filterControlKey = "";
    state.filterMenuKey = state.filterMenuKey === meta.key ? "" : meta.key;
    render();
  }
  if (meta.type === "toggleFilterControl") {
    state.filterMenuKey = "";
    state.filterControlKey = state.filterControlKey === meta.key ? "" : meta.key;
    render();
  }
  if (meta.type === "closeFilterControl") {
    state.filterControlKey = "";
    render();
  }
  if (meta.type === "setSelectValue") {
    setFilterState({ id: meta.itemId }, meta.value, meta.scopeKey);
    state.filterControlKey = "";
    render();
  }
  if (meta.type === "clearDateValue") {
    setFilterState({ id: meta.itemId }, { start: "", end: "", anchor: startOfMonthIso(todayIso()) }, meta.scopeKey);
    state.filterControlKey = "";
    render();
  }
  if (meta.type === "shiftDateAnchor") {
    const current = scopeFilters(meta.scopeKey)[meta.itemId] || { start: "", end: "", anchor: startOfMonthIso(todayIso()) };
    setFilterState({ id: meta.itemId }, { ...current, anchor: addMonthsIso(current.anchor || startOfMonthIso(todayIso()), meta.delta) }, meta.scopeKey);
    render();
  }
  if (meta.type === "pickDateValue") {
    const current = getDateRangeState({ id: meta.itemId, kind: "date" }, meta.scopeKey);
    let next;
    if (!current.start || current.end) {
      next = { ...current, start: meta.value, end: "", anchor: startOfMonthIso(meta.value) };
    } else if (meta.value < current.start) {
      next = { ...current, start: meta.value, end: current.start, anchor: startOfMonthIso(meta.value) };
    } else {
      next = { ...current, end: meta.value, anchor: current.anchor };
    }
    setFilterState({ id: meta.itemId }, next, meta.scopeKey);
    if (next.start && next.end) state.filterControlKey = "";
    render();
  }
  if (meta.type === "toggleDocTree") {
    if (state.docManagement.expandedNodes.has(meta.label)) state.docManagement.expandedNodes.delete(meta.label);
    else state.docManagement.expandedNodes.add(meta.label);
    render();
  }
  if (meta.type === "setDocTreeVariant") {
    state.docManagement.treeVariant = meta.value;
    render();
  }
  if (meta.type === "selectDocTreeNode") {
    state.docManagement.activeNode = meta.label;
    if (meta.hasChildren) state.docManagement.expandedNodes.add(meta.label);
    render();
  }
  if (meta.type === "setDocActive") {
    state.docManagement.activeNode = meta.label;
    render();
  }
  if (meta.type === "toggleDocRow") {
    if (state.docManagement.selectedRows.has(meta.id)) state.docManagement.selectedRows.delete(meta.id);
    else state.docManagement.selectedRows.add(meta.id);
    render();
  }
  if (meta.type === "toggleAllDocRows") {
    if (state.docManagement.selectedRows.size === DOC_MANAGEMENT_ROWS.length) state.docManagement.selectedRows.clear();
    else state.docManagement.selectedRows = new Set(DOC_MANAGEMENT_ROWS.map((item) => item.id));
    render();
  }
  if (meta.type === "toggleDocRowMenu") {
    state.docManagement.rowMenu = state.docManagement.rowMenu === meta.id ? "" : meta.id;
    render();
  }
  if (meta.type === "toggleDocSwitch") {
    const target = DOC_MANAGEMENT_ROWS.find((item) => item.id === meta.id);
    if (target) target.switchOn = !target.switchOn;
    render();
  }
  if (meta.type === "openDocConfig") {
    const ids = meta.mode === "batch"
      ? Array.from(state.docManagement.selectedRows)
      : [meta.id];
    openDocConfigView(meta.mode, ids);
  }
  if (meta.type === "openDocSlices") {
    openDocSliceView(meta.id);
  }
  if (meta.type === "closeDocSlices") {
    state.docManagement.sliceView = null;
    state.resetMainScroll = true;
    render();
  }
  if (meta.type === "selectDocSlice") {
    if (state.docManagement.sliceView) state.docManagement.sliceView.activeSlice = meta.id;
    render();
  }
  if (meta.type === "openSliceImage") {
    if (state.docManagement.sliceView) state.docManagement.sliceView.imageViewer = meta.image;
    render();
  }
  if (meta.type === "closeSliceImage") {
    if (state.docManagement.sliceView) state.docManagement.sliceView.imageViewer = "";
    render();
  }
  if (meta.type === "editDocSlice") {
    if (state.docManagement.sliceView) {
      state.docManagement.sliceView.activeSlice = meta.id;
      state.docManagement.sliceView.editing = true;
      state.docManagement.sliceView.keywordEditor = false;
      state.docManagement.sliceView.drawerImageViewer = "";
    }
    render();
  }
  if (meta.type === "closeEditSlice") {
    if (state.docManagement.sliceView) {
      state.docManagement.sliceView.editing = false;
      state.docManagement.sliceView.keywordEditor = false;
      state.docManagement.sliceView.drawerImageViewer = "";
    }
    render();
  }
  if (meta.type === "openDrawerImagePreview") {
    if (state.docManagement.sliceView) state.docManagement.sliceView.drawerImageViewer = meta.image;
    render();
  }
  if (meta.type === "closeDrawerImagePreview") {
    if (state.docManagement.sliceView) state.docManagement.sliceView.drawerImageViewer = "";
    render();
  }
  if (meta.type === "openKeywordEditor") {
    if (state.docManagement.sliceView) state.docManagement.sliceView.keywordEditor = true;
    render();
  }
  if (meta.type === "openDocUpload") {
    state.docManagement.rowMenu = "";
    state.docManagement.configView = null;
    state.docManagement.sliceView = null;
    clearAllUploadProgress();
    state.docManagement.uploadView = createUploadView();
    state.resetMainScroll = true;
    render();
  }
  if (meta.type === "closeDocUpload") {
    clearAllUploadProgress();
    state.docManagement.uploadView = null;
    state.resetMainScroll = true;
    render();
  }
  if (meta.type === "deleteUploadedFile") {
    const view = state.docManagement.uploadView;
    clearUploadProgress(meta.id);
    if (view) {
      view.files = view.files.filter((file) => file.id !== meta.id);
      if (view.activeUploadFileId === meta.id) {
        view.activeUploadFileId = view.files[0]?.id || "";
        view.activeSlice = 0;
      }
    }
    render();
  }
  if (meta.type === "docUploadNext") {
    const view = state.docManagement.uploadView;
    if (view) {
      if (view.step === 1 && !view.files.some((file) => file.status === "done")) return;
      view.step = Math.min(3, view.step + 1);
    }
    state.resetMainScroll = true;
    render();
  }
  if (meta.type === "docUploadPrev") {
    const view = state.docManagement.uploadView;
    if (view) view.step = Math.max(1, view.step - 1);
    state.resetMainScroll = true;
    render();
  }
  if (meta.type === "docUploadConfirm") {
    const view = state.docManagement.uploadView;
    if (view) {
      view.files.forEach((file, index) => {
        DOC_MANAGEMENT_ROWS.unshift({
          id: `uploaded-${Date.now()}-${index}`,
          index: String(index + 1),
          name: file.name,
          format: file.format || "DOCX",
          slices: "4",
          status: tag("处理完成", "success"),
          statusText: "处理完成",
          labels: "-",
          createdAt: "2026-05-24 20:30:00",
          canBatch: true,
          ops: "done",
          switchOn: true,
        });
      });
    }
    clearAllUploadProgress();
    state.docManagement.uploadView = null;
    state.resetMainScroll = true;
    render();
  }
  if (meta.type === "setUploadMode") {
    const view = getActiveDocProcessView();
    if (view) view.mode = meta.mode;
    render();
  }
  if (meta.type === "setUploadSegment") {
    const view = getActiveDocProcessView();
    if (view) view.segment = meta.segment;
    render();
  }
  if (meta.type === "setUploadCategory") {
    const view = getActiveDocProcessView();
    if (view) view.category = meta.category;
    render();
  }
  if (meta.type === "setUploadComponent") {
    const view = getActiveDocProcessView();
    if (view) view.component = meta.component;
    render();
  }
  if (meta.type === "toggleUploadCheck") {
    const view = getActiveDocProcessView();
    if (view) view.checks[meta.key] = !view.checks[meta.key];
    render();
  }
  if (meta.type === "toggleUploadFileList") {
    const view = getActiveDocProcessView();
    if (view) view.showFileList = !view.showFileList;
    render();
  }
  if (meta.type === "selectUploadPreviewFile") {
    const view = getActiveDocProcessView();
    if (view) {
      view.activeUploadFileId = meta.id;
      view.activeSlice = 0;
    }
    render();
  }
  if (meta.type === "selectUploadSlice") {
    const view = getActiveDocProcessView();
    if (view) view.activeSlice = meta.index;
    render();
  }
  if (meta.type === "closeDocConfig") {
    state.docManagement.configView = null;
    state.resetMainScroll = true;
    render();
  }
  if (meta.type === "docConfigNext") {
    if (state.docManagement.configView) state.docManagement.configView.step = 2;
    state.resetMainScroll = true;
    render();
  }
  if (meta.type === "docConfigPrev") {
    if (state.docManagement.configView) state.docManagement.configView.step = 1;
    state.resetMainScroll = true;
    render();
  }
  if (meta.type === "docConfigConfirm") {
    const docs = getDocConfigDocs();
    docs.forEach((doc, index) => {
      doc.ops = "queued";
      doc.statusText = "排队中";
      doc.status = tag("排队中", "warning");
      doc.slices = "-";
      doc.queuePosition = index + 1;
      doc.queueTotal = Math.max(docs.length, 1);
      doc.progress = 0;
      doc.canBatch = false;
    });
    state.docManagement.configView = null;
    state.resetMainScroll = true;
    render();
  }
  if (meta.type === "cycleFormatAlgorithm") {
    const view = state.docManagement.configView || state.docManagement.uploadView;
    if (view) {
      if (!view.formatAlgorithms) view.formatAlgorithms = createFormatAlgorithmState();
      view.formatAlgorithms[meta.format] = nextFormatAlgorithmName(view.formatAlgorithms[meta.format]);
    }
    render();
  }
  if (meta.type === "resetFilters") {
    clearScopeFilters(meta.scopeKey);
    state.filterMenuKey = "";
    state.filterControlKey = "";
    render();
  }
});

document.addEventListener("input", (event) => {
  const roiInput = event.target.closest("[data-ops-roi-input]");
  if (roiInput && opsState._agentRoiModal) {
    const key = roiInput.dataset.opsRoiInput === "agent" ? "agentTime" : "manualTime";
    opsState._agentRoiModal = { ...opsState._agentRoiModal, [key]: roiInput.value };
    opsState._agentRoiModal.error = "";
    // 只更新 preview 文本，不重绘整个 modal（避免光标/焦点丢失）
    const manual = Number(opsState._agentRoiModal.manualTime || 0);
    const agent = Number(opsState._agentRoiModal.agentTime || 0);
    const preview = (manual > 0 && agent > 0) ? ((manual - agent) / manual * 100).toFixed(1) + "%" : "—";
    const previewEl = document.querySelector(".ops-roi-preview-value");
    if (previewEl) {
      previewEl.textContent = preview;
      previewEl.classList.toggle("good", preview !== "—" && parseFloat(preview) > 50);
    }
    return;
  }
  const opsUserDate = event.target.closest("[data-ops-user-date]");
  if (opsUserDate) {
    if (opsUserDate.dataset.opsUserDate === "start") opsState.userStart = opsUserDate.value;
    if (opsUserDate.dataset.opsUserDate === "end") opsState.userEnd = opsUserDate.value;
    if (opsState.userStart || opsState.userEnd) opsState.rangeKey = "custom";
    opsState.userPage = 1;
    return;
  }
  const auditInput = event.target.closest("[data-ops-audit-filter]");
  if (auditInput) {
    opsState.auditFilter[auditInput.dataset.opsAuditFilter] = auditInput.value;
    return;
  }
  const auditRangeDate = event.target.closest('input[type="date"][data-audit-range]');
  if (auditRangeDate && opsState._auditModal === "rangeAudit") {
    const field = auditRangeDate.dataset.auditRange;
    if (field === "start" || field === "end") {
      opsState._auditRange[field] = auditRangeDate.value;
    }
    return;
  }
  const opsAgentSearch = event.target.closest("[data-ops-agent-search]");
  if (opsAgentSearch) {
    opsState.agentQuery = opsAgentSearch.value;
    render();
    requestAnimationFrame(() => {
      const nextInput = document.querySelector("[data-ops-agent-search]");
      if (nextInput) { nextInput.focus(); nextInput.setSelectionRange(nextInput.value.length, nextInput.value.length); }
    });
    return;
  }
  const docTreeSearch = event.target.closest("[data-doc-tree-search]");
  if (docTreeSearch) {
    state.docManagement.treeQuery = docTreeSearch.value;
    render();
    requestAnimationFrame(() => {
      const nextInput = document.querySelector("[data-doc-tree-search]");
      if (nextInput) {
        nextInput.focus();
        nextInput.setSelectionRange(nextInput.value.length, nextInput.value.length);
      }
    });
    return;
  }
  const frontInput = event.target.closest("[data-front-input]");
  if (frontInput) {
    state.frontChat.input = frontInput.value;
    const composer = frontInput.closest(".front-composer");
    const sendButton = composer?.querySelector(".front-send");
    if (sendButton) sendButton.classList.toggle("ready", Boolean(frontInput.value.trim()));
    return;
  }
  const textTarget = event.target.closest("[data-filter-input]");
  if (textTarget) {
    const [scopeKey, itemId] = textTarget.dataset.filterInput.split("|");
    setFilterState({ id: itemId }, textTarget.value, scopeKey);
  }
});

document.addEventListener("keydown", (event) => {
  const auditInput = event.target.closest("[data-ops-audit-filter='operator']");
  if (auditInput && event.key === "Enter") {
    event.preventDefault();
    opsState.auditApplied = { ...opsState.auditFilter };
    opsState.auditPage = 1;
    render();
    opsAuditToast(`已查询到 ${opsAuditRows().length} 条日志`);
    return;
  }
  const frontInput = event.target.closest("[data-front-input]");
  if (!frontInput) return;
  if (event.key === "Enter" && !event.shiftKey) {
    event.preventDefault();
    state.frontChat.input = frontInput.value;
    submitFrontChat();
  }
});

document.addEventListener("change", (event) => {
  const opsUserDate = event.target.closest("[data-ops-user-date]");
  if (opsUserDate) {
    opsState.rangeKey = "custom";
    opsState.userPage = 1;
    render();
    return;
  }
  const opsUserRange = event.target.closest("[data-ops-user-range]");
  if (opsUserRange) {
    opsState.rangeKey = opsUserRange.value;
    opsState.userPage = 1;
    if (opsState.rangeKey !== "custom") {
      opsState.userStart = "";
      opsState.userEnd = "";
    }
    render();
    return;
  }
  const auditSelect = event.target.closest("[data-ops-audit-filter]");
  if (auditSelect) {
    opsState.auditFilter[auditSelect.dataset.opsAuditFilter] = auditSelect.value;
    return;
  }
  const auditRangePreset = event.target.closest('input[type="radio"][data-audit-range-preset]');
  if (auditRangePreset && opsState._auditModal === "rangeAudit") {
    opsState._auditRange.preset = auditRangePreset.dataset.auditRangePreset || opsState._auditRange.preset;
    render();
    return;
  }
  const auditRangeToggle = event.target.closest('input[type="checkbox"][data-audit-range="applyToExport"]');
  if (auditRangeToggle && opsState._auditModal === "rangeAudit") {
    opsState._auditRange.applyToExport = !!auditRangeToggle.checked;
    return;
  }
  const fileInput = event.target.closest("#upload-file-input");
  if (!fileInput || !state.docManagement.uploadView) return;
  appendUploadedFiles(Array.from(fileInput.files || []));
  fileInput.value = "";
});

document.addEventListener("dragover", (event) => {
  if (!event.target.closest(".upload-dropzone")) return;
  event.preventDefault();
  event.target.closest(".upload-dropzone").classList.add("dragging");
});

document.addEventListener("dragleave", (event) => {
  const zone = event.target.closest(".upload-dropzone");
  if (zone) zone.classList.remove("dragging");
});

document.addEventListener("drop", (event) => {
  const zone = event.target.closest(".upload-dropzone");
  if (!zone || !state.docManagement.uploadView) return;
  event.preventDefault();
  zone.classList.remove("dragging");
  appendUploadedFiles(Array.from(event.dataTransfer?.files || []));
});

window.addEventListener("hashchange", () => {
  const next = normalizePath(location.hash.slice(1) || "/analytics");
  if (!state.tabs.includes(next)) state.tabs.push(next);
  state.filterMenuKey = "";
  state.filterControlKey = "";
  state.path = next;
  state.openGroups = new Set(defaultOpenGroups(next));
  render();
});

window.addEventListener("resize", () => {
  render();
});

state.path = normalizePath(state.path);
if (!state.tabs.includes(state.path)) state.tabs.push(state.path);
render();
