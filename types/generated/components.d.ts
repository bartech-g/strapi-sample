import type { Schema, Attribute } from '@strapi/strapi';

export interface BlocksHero extends Schema.Component {
  collectionName: 'components_blocks_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    Heading: Attribute.String;
    Text: Attribute.String;
    link: Attribute.Component<'elements.button'>;
    Image: Attribute.Media;
  };
}

export interface BlocksPricing extends Schema.Component {
  collectionName: 'components_blocks_pricings';
  info: {
    displayName: 'Pricing';
  };
  attributes: {
    name: Attribute.String;
    description: Attribute.String;
    plan: Attribute.Component<'elements.pricing-cards'>;
  };
}

export interface BlocksRow extends Schema.Component {
  collectionName: 'components_blocks_rows';
  info: {
    displayName: 'Row';
  };
  attributes: {
    Card: Attribute.Component<'elements.card', true>;
  };
}

export interface ElementsButton extends Schema.Component {
  collectionName: 'components_elements_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    title: Attribute.String;
    link: Attribute.String;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
    type: Attribute.Enumeration<['Primary', 'Secondary']>;
  };
}

export interface ElementsCard extends Schema.Component {
  collectionName: 'components_elements_cards';
  info: {
    displayName: 'Card';
  };
  attributes: {
    image: Attribute.Media;
    Heading: Attribute.String;
    Description: Attribute.String;
  };
}

export interface ElementsContentJson extends Schema.Component {
  collectionName: 'components_elements_content_jsons';
  info: {
    displayName: 'contentJSON';
    icon: 'alien';
  };
  attributes: {
    JSONID: Attribute.String;
    Content: Attribute.JSON;
  };
}

export interface ElementsContentObject extends Schema.Component {
  collectionName: 'components_elements_content_objects';
  info: {
    displayName: 'contentObject';
    icon: 'alien';
  };
  attributes: {
    JSON: Attribute.JSON;
  };
}

export interface ElementsIconTextPair extends Schema.Component {
  collectionName: 'components_elements_icon_text_pairs';
  info: {
    displayName: 'iconTextPair';
  };
  attributes: {
    Icon: Attribute.String;
    Text: Attribute.Blocks;
  };
}

export interface ElementsPricingCards extends Schema.Component {
  collectionName: 'components_elements_pricing_cards';
  info: {
    displayName: 'Pricing Cards';
  };
  attributes: {
    planType: Attribute.String;
    planTypes: Attribute.String;
    isFeatured: Attribute.Boolean & Attribute.DefaultTo<false>;
    services: Attribute.Relation<
      'elements.pricing-cards',
      'oneToMany',
      'api::service.service'
    >;
    link: Attribute.Component<'elements.button'>;
  };
}

export interface SeoMetaData extends Schema.Component {
  collectionName: 'components_seo_meta_data';
  info: {
    displayName: 'Meta Data';
  };
  attributes: {
    metaTitle: Attribute.String;
    metaDescription: Attribute.String;
    metaImage: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blocks.hero': BlocksHero;
      'blocks.pricing': BlocksPricing;
      'blocks.row': BlocksRow;
      'elements.button': ElementsButton;
      'elements.card': ElementsCard;
      'elements.content-json': ElementsContentJson;
      'elements.content-object': ElementsContentObject;
      'elements.icon-text-pair': ElementsIconTextPair;
      'elements.pricing-cards': ElementsPricingCards;
      'seo.meta-data': SeoMetaData;
    }
  }
}
