import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
    faArrowUp,
    faBolt,
    faBurn,
    faChartArea,
    faCheckSquare,
    faClock,
    faCloud,
    faCodeBranch,
    faColumns,
    faCompress,
    faCopy,
    faDownload,
    faEllipsisH,
    faEllipsisV,
    faExchangeAlt,
    faEye,
    faFileArchive,
    faFileExport,
    faFilter,
    faFolder,
    faCog,
    faHdd,
    faInfoCircle,
    faList,
    faLink,
    faLock,
    faPause,
    faPen,
    faPlay,
    faPlus,
    faQuestion,
    faShareAlt,
    faStream,
    faTags,
    faTrash,
    faTrashRestore,
    faExclamationTriangle,
    faUndo,
    faUserLock,
    faWrench,
} from "@fortawesome/free-solid-svg-icons";

library.add(
    faArrowUp,
    faBolt,
    faBurn,
    faChartArea,
    faCheckSquare,
    faClock,
    faCloud,
    faCodeBranch,
    faColumns,
    faCompress,
    faCopy,
    faDownload,
    faEllipsisH,
    faEllipsisV,
    faExchangeAlt,
    faEye,
    faFileArchive,
    faFileExport,
    faFilter,
    faFolder,
    faCog,
    faHdd,
    faInfoCircle,
    faLink,
    faList,
    faLock,
    faPause,
    faPen,
    faPlay,
    faPlus,
    faQuestion,
    faShareAlt,
    faStream,
    faTags,
    faTrash,
    faTrashRestore,
    faExclamationTriangle,
    faUndo,
    faUserLock,
    faWrench
);

export const iconMixin = {
    components: {
        Icon: FontAwesomeIcon,
    },
};

export const iconPlugin = {
    install(Vue) {
        Vue.mixin(iconMixin);
    },
};
