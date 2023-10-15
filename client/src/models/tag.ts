enum Tag_Origin {
    'feed' = 'feed',
    'user' = 'user',
}

export interface TagApiData {
    tag_id: number;
    tag_name: string;
    tag_origin: 'feed' | 'user'
}

export class Tag {
    public tag_id: number
    public tag_name: string
    public tag_origin:  Tag_Origin

    public constructor (t: TagApiData) {
        this.tag_id = t.tag_id
        this.tag_name = t.tag_name
        this.tag_origin = Tag_Origin[t.tag_origin]
    }
}