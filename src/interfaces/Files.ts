export interface Preview {
    my: string
    previewURL: string
    downloadLinkSSL: string
}

export interface DownloadBox {
    downloadURL?: string
    weight: string
}

export interface FileWidget {
    downloadBox: DownloadBox
    preview: Preview
}

export interface Info {
    file_widget: FileWidget
}

export interface IFiles {
    info: Info
}