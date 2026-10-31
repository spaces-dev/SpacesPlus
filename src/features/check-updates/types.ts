export const changelogSchema = 1

export type ChangelogSectionType = 'added' | 'changed' | 'fixed' | 'improved' | 'removed' | 'other'

export interface ChangelogSection {
  type?: ChangelogSectionType
  title?: string
  items: string[]
}

export interface ChangelogRelease {
  version: string
  date?: string
  unreleased?: boolean
  sections: ChangelogSection[]
}

export interface Changelog {
  schema: number
  releases: ChangelogRelease[]
}
