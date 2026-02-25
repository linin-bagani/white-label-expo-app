// export const findIndexById = (cacheRecordList, id) => cacheRecordList.findIndex(record => record.id === id);
// export const findIndexByUuid = (cacheRecordList, uuid) => cacheRecordList.findIndex(record => record.uuid === uuid);
//
// export const removeRecordFromCache = (store, query, variables, getRecordList, findIndexMethod) => {
//     if (!findIndexMethod) throw new Error('Must implement findIndexMethod');
//     if (!getRecordList) throw new Error('Must implement getRecordList');
//
//     const data = store.readQuery({
//         query,
//         variables,
//     });
//
//     const recordList = getRecordList(data);
//     const recordIndex = findIndexMethod(recordList);
//
//     if (recordIndex > -1) {
//         recordList.splice(recordIndex, 1);
//
//         store.writeQuery({
//             query,
//             data,
//             variables,
//         });
//     }
// };

// export const addRecordToCache = (store, query, variables, recordToPush, getRecordList) => {
//     if (!getRecordList) throw new Error('Must implement getRecordList');
//
//     const data = store.readQuery({ query, variables });
//
//     const recordList = getRecordList(data);
//
//     recordList.push(recordToPush);
//
//     store.writeQuery({
//         query,
//         data,
//         variables,
//     });
// };

import { ApolloCache, Unmasked } from '@apollo/client';
import type { DocumentNode } from 'graphql';

// export const removeRecordFromCacheWithTransform = (
//   store,
//   query,
//   variables,
//   getRecordList,
//   findIndexMethod,
//   transformData
// ) => {
//   if (!findIndexMethod) throw new Error('Must implement findIndexMethod');
//   if (!getRecordList) throw new Error('Must implement getRecordList');
//   if (!transformData) throw new Error('Must implement transformData');
//
//   const data = store.readQuery({
//     query,
//     variables
//   });
//
//   const recordList = getRecordList(data);
//   const recordIndex = findIndexMethod(recordList);
//
//   if (recordIndex > -1) {
//     const newRecords = [...recordList.slice(0, recordIndex), ...recordList.slice(recordIndex + 1)];
//     // recordList.splice(recordIndex, 1);
//
//     const newData = transformData(data, newRecords);
//
//     store.writeQuery({
//       query,
//       data: newData,
//       variables
//     });
//   }
// };

export const addRecordToCacheWithTransform = <T>(
  store: ApolloCache<any>,
  query: DocumentNode,
  variables: unknown,
  transformData: (data: unknown) => Unmasked<T>,
) => {
  if (!transformData) throw new Error('Must implement transformData');

  const data = store.readQuery({
    query,
    variables,
  });

  const newData = transformData(data);

  store.writeQuery({
    query,
    data: newData,
    variables,
  });
};

// export const removeRecordFromFragmentCacheWithTransform = (
//   store,
//   id,
//   fragment,
//   getRecordList,
//   findIndexMethod,
//   transformData
// ) => {
//   if (!findIndexMethod) throw new Error('Must implement findIndexMethod');
//   if (!getRecordList) throw new Error('Must implement getRecordList');
//   if (!transformData) throw new Error('Must implement transformData');
//
//   const data = store.readFragment({
//     id,
//     fragment
//   });
//
//   const recordList = getRecordList(data);
//   const recordIndex = findIndexMethod(recordList);
//   if (recordIndex > -1) {
//     const newRecords = [...recordList.slice(0, recordIndex), ...recordList.slice(recordIndex + 1)];
//     // recordList.splice(recordIndex, 1);
//
//     const newData = transformData(data, newRecords);
//
//     store.writeFragment({
//       id,
//       fragment,
//       data: newData
//     });
//   }
// };
