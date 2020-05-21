import React from 'react';

import './shop.styles.scss'


import CollectionOverView from '../../components/collection-overview/collection-overview.component';

const ShopPage = ({ collections }) => (
    <div className="shop-page">
        <CollectionOverView />
    </div>
)

export default ShopPage;