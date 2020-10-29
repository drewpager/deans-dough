import React from 'react';
import S from '@sanity/desk-tool/structure-builder';

// Build a custom sidebar

export default function sidebar() {
  return S.list()
    .title(`Dean's Dough`)
    .items([
      // add a new list item

      S.listItem()
        .title(`Home Page`)
        .icon(() => <strong>Hi</strong>)
        .child(S.editor().schemaType('storeSettings').documentId('downtown')),

      ...S.documentTypeListItems().filter(
        (item) => item.getId() !== 'storeSettings'
      ),
    ]);
}
