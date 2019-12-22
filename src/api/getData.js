import fetch from '@/config/fetch'

export const addPersonCard = data => fetch('/novelPersonCard/addPersonCard',data,"post");

export const getPersonCardAndImgList = data => fetch('/novelPersonCard/getPersonCardAndImgList',data,"post");

export const getPersonCardById = data => fetch('/novelPersonCard/getPersonCardById',data);

export const addSpeech = data => fetch('/novelPersonCard/addSpeech',data,"post");

export const addBiography = data => fetch('/novelPersonCard/addBiography',data,"post");

export const findMovieTypeList = data => fetch('/novelExcerptSpace/findMovieTypeList',data);

export const findMovieDetail = data => fetch('/novelExcerptSpace/findMovieDetail',data);

export const findFrameworkCardList = data => fetch('/novelFramework/findFrameworkCardList',data);

export const findNoteDetail = data => fetch('/novelFramework/findNoteDetail',data);

export const findTimeLineList = data => fetch('/novelTimeAxis/findList',data);

export const addTimeLineEvent = data => fetch('/novelTimeAxis/addEvent',data,"post");

export const getCategoryList = data => fetch('/novelCard/findCategoryList',data);

export const getCardDetail = data => fetch('/novelCard/getCardDetail',data);

