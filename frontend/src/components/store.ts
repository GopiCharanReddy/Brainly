import {create} from 'zustand'

type ShareState = {
  shareUrl: string,
  setShareUrl: (url: string) => void
}

const useStore = create<ShareState>() ((set) => ({
  shareUrl: '',
  setShareUrl: (url:string) => set({shareUrl: url})
}))

export default useStore