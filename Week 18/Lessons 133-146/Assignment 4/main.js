/*
*لديك Regular Expression Pattern
المطلوب تقسيمه إلى أجزاء وشرح كل جزء في تعليق منفصل
*/

let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;
// https? => zero or one
// \/\/ => //
// (?:[-\w]+\.)?
// ([-\w]+)
// \.\w+
// (?:\.\w+)?
// \/?.*/i