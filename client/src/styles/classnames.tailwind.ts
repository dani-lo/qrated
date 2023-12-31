const withBorder = (cn: string) => `${ cn } with-border`


export const cnHeaderLinkClassNameActive = ' text-white bg-red-600 cursor-pointer px-8 py-2.5 text-base text-xs leading-3 shadow-md rounded'
export const cnHeaderLinkClassNameUnactive = 'text-gray-600 border border-white bg-gray-50 cursor-pointer px-8 py-2.5 text-base text-xs leading-3 shadow-md rounded'

export const cnMobHeaderLinkClassName = 'px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 text-base'

export const cnButton = 'text-white bg-amber-700 hover:bg-amber-800   text-xs px-4 py-2 text-center inline-flex items-center mr-2'
export const cnButtonDanger = 'text-red-700 hover:text-white border border-red-700 hover:bg-red-800  text-sm px-5 py-2.5 text-center mr-2 mb-2'
export const cnButtonSuccess = 'text-green-700 hover:text-white border border-green-700 hover:bg-green-800  text-sm px-5 py-2.5 text-center mr-2 mb-2'
export const cnButtonWarning = 'text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 text-sm px-5 py-2.5 text-center mr-2 mb-2'

export const cnBigIcon = (txt: string) => 'text-xl ' + txt
export const cnBigIconDark = (txt: string) =>  'text-xl ' + txt
export const cnBigIconActive = (txt: string) => 'text-xl ' + txt


export const cnPageLinkActive = 'flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-yellow-50 hover:bg-yellow-100 hover:text-blue-700 '
export const cnPageLinkUnactive = 'flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700'
export const cnNavLinkActive = 'flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 '
export const cnNavLinkUnactive = `${ cnNavLinkActive } opacity-50`

export const cnParagraph = 'my-1 py-1 text-sm text-gray-700'
export const cnPostscriptum = 'text-xs p-0 m-0 block'
export const cnPayoff = `${ cnParagraph } font-semibold`

export const cnLabel = 'text-sm text-gray-700'

export const cnTitle = 'mb-4 text-2xl tracking-tight font-extrabold text-gray-900 dark:text-white'
export const cnLogo = 'mb-8 text-xl text-white text-center italic'
export const cnLogoContainer = ''
export const cnSectionTitle= 'my-4 text-lg font-bold tracking-tight text-gray-900 dark:text-white'
export const cnSectionSubTitle= 'my-3 text-base font-light text-gray-900 lg:mb-16 sm:text-xl dark:text-gray-200'
export const cnSectionSmallTitle= 'my-2 text-sm font-bold tracking-tight'

export const cnCardContainer = 'flex flex-col justify-between px-4 py-2 leading-normal'
export const cnCardTitle= `${ cnSectionSmallTitle } my-3`

export const cnTag = (bg: string) =>  'm-2 m-y-0 ml-0 text-white cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 rounded ' + bg

export const cnModal = ''

export const cnCard = ''

export const cnBaloon = 'p-4 mt-4 bg-gray-100 rounded-lg dark:bg-gray-800 dark:border-gray-700'

export const cnInputText = withBorder('bg-gray-50 text-gray-900 text-xs rounded-lg inline-block')

export const cnInputSelect = ''

export const cnInputRadio = ''

export const cnInputCheckbox = 'w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded'

export const cnTabItem = 'inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 group'

export const cnTextClear = 'text-gray-200'

export const cnPage = "p-6"

export const cnBold = 'font-bold'

export const border = (borderCol: string) => 'border border-solid ' + borderCol

export const utils = {
    disabled: (cname: string) => `${ cname } disabled` ,
    activeText: (cname: string) => `${ cname } text-red-600` ,
    btnDanger: () => `${ cnButton } ${ cnButtonDanger }` ,
    btnWarning: () => `${ cnButton } ${ cnButtonSuccess }` ,
    btnSuccess: () => `${ cnButton } ${ cnButtonWarning }` ,
    cnJoin: (cnames: string[]) => {
        return cnames.join(' ')
    },
    cnDirectDescendant: (descendantTag: string, cname: string) => `[&>${ descendantTag }]:${ cname }`,
    cnFullW: (cname: string) => `${ cname } w-full` ,
}

export const cnTabItemSvgIcon = 'w-4 h-4 mr-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300'

export const cnTable  = (bg: string) =>  {

    return {
        table: 'w-full text-sm text-left text-gray-500 dark:text-gray-400 mb-6',
        thead: 'text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400',
        th: 'px-4 py-3   text-white text-sm underline font-lld ' + bg,
        thContent: 'flex items-center justify-between cursor-pointer',
        td: 'text-sm px-4 py-3 bg-gray-50 text-gray-900' ,
        tdAction: 'text-sm px-4 py-3 bg-gray-50 text-gray-900 text-center' ,
    }
   
}

export const cnActionablesList = {
    div: 'my-4 max-w-md border border-solid border-gray-400 p-4 pt-2 rounded',
    ul: '',
    li: 'inline-block py-2 flex items-center justify-between',
}

export const cnItemCardActions = 'flex items-center p-2 justify-between absolute w-full top-0 left-0  h-40'

export const cnItemCard = 'pt-6 overlay-filler-parent mr-4 mb-4 pb-2 bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl top-0 left-0 w-full'

export const cnTextualList = {
    ul: 'm-0 p-0',// flex flex-wrap',
    li: 'm-0 p-1 text-sm text-gray-700 '
}

export const cnColorPicker = {
    ul: 'my-6 p-0 flex flex-wrap',
    li: 'm-0 p-1 mr-6 text-sm w-30px h-30px cursor-pointer hover:opacity-50'
}

export const cnPaginateContainer = 'flex '