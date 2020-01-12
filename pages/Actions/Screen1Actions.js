import { GET_DASHBOARD_ITEMS } from '../Constants';
import { ITEM_NAME, ITEM_SCHEMA } from '../Db'
import { EMP_IMG } from '../Assets/Images'



const Realm = require('realm');

export const getDashBoardItems = () => {
    return (dispatch) => {
        Realm.open({
            schema: [ITEM_SCHEMA]
        }).then(realm => {
            const items = realm.objects(ITEM_NAME)
            if (items == null || items.length == 0) {
                realm.write(() => {
                    realm.create(ITEM_NAME, {
                        item_name: 'Employees',
                        item_img_url: EMP_IMG,
                        item_nav: 'sjdks'
                    });
                    realm.create(ITEM_NAME, {
                        item_name: 'Employees1',
                        item_img_url: EMP_IMG,
                        item_nav: 'sjdks'
                    });
                    realm.create(ITEM_NAME, {
                        item_name: 'Employees2',
                        item_img_url: EMP_IMG,
                        item_nav: 'sjdks'
                    });
                });
            }         
            dispatch({
                type: GET_DASHBOARD_ITEMS,
                payload: items
            });

        });
    };

};