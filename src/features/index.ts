import { adBlock } from './ad-block'
import { apiDebugger } from './api-debugger'
import { baseStyles } from './base-styles'
import { blockedFiles } from './blocked-files'
import { bodyStyle } from './body-style'
import { checkUpdates } from './check-updates'
import { coins } from './coins'
import { deleteBlogs } from './delete-blogs'
import { deleteComments } from './delete-comments'
import { deleteReaders } from './delete-readers'
import { disableRedirect } from './disable-redirect'
import { favoriteUser } from './favorite-user'
import { firstLaunch } from './first-launch'
import { freeStickers } from './free-stickers'
import { friendsOnline } from './friends-online'
import { galleryRotate } from './gallery-rotate'
import { hiddenRightbar } from './hidden-rightbar'
import { karma } from './karma'
import { newYear } from './new-year'
import { oldHeader } from './old-header'
import { playerDownload } from './player-download'
import { qrCode } from './qr-code'
import { recentSmiles } from './recent-smiles'
import { scrollMove } from './scroll-move'
import { createSettingsPage } from './settings/page'
import { sidebarButton } from './sidebar-button'
import { stickyHeader } from './sticky-header'
import { userOnline } from './user-online'
import { videoSpeed } from './video-speed'
import { weatherWidget } from './weather'

const configurable = [
  deleteBlogs,
  deleteReaders,
  deleteComments,
  blockedFiles,
  oldHeader,
  playerDownload,
  disableRedirect,
  userOnline,
  coins,
  scrollMove,
  hiddenRightbar,
  favoriteUser,
  galleryRotate,
  adBlock,
  stickyHeader,
  karma,
  freeStickers,
  videoSpeed,
  recentSmiles,
  friendsOnline,
  bodyStyle,
  weatherWidget,
]

export const features = [
  baseStyles,
  ...configurable,
  apiDebugger,
  checkUpdates,
  sidebarButton,
  firstLaunch,
  newYear,
  qrCode,
  createSettingsPage(configurable),
]
