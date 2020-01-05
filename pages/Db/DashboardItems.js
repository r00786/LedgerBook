export const ITEM_NAME = 'item';

export const ITEM_SCHEMA = {
    name: ITEM_NAME,
    primaryKey: 'item_name',
    properties: {
        item_name: 'string',
        item_img_url: 'string',
        item_nav: 'string'
    }
};