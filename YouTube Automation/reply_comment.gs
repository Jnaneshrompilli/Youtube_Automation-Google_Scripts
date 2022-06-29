// Author: Jnaneswara Rao Rompilli
// Description: This Scripts gives automated replies to the comments on YouTube video

function main() {
    var videoId = j1w8duYS32c;
    var author = commentThreadsListByVideoId(snippet, videoId);
    commentListByparentId(snippet, author.parentid) }

function commentThreadsListByVideoId(part, videoId) {

    var response = YouTube.CommentThreads.list(part, {
    videoId : videoId }
);
var obj = {
reply0 : response.items[0].snippet.topLevelComment.snippet.authorDisplayName, reply1 : response.items[1].snippet.topLevelComment.snippet.authorDisplayName, parentid : response.items[1].id }
Logger.log(obj.parentid) return obj;
}

function commentListByparentId(part, parentid) {

var number = Math.floor(Math.random() * 9);
Logger.log(number);
var replylist =[Hello, Subscribe, Thanks for commenting, Like the video, Cool !, Hello World, My Goodness, Roses aren t Red, I m inevitable];
var updatereply = {
snippet : {
textOriginal : replylist[number], parentId : parentid }
}
Logger.log(Reply added successfully) YouTube.Comments.insert(updatereply, part) }