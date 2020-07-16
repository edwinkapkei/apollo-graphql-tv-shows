# apollo-graphql-tv-shows
Apollo graphql implementation with TV Maze APIs


This project works in tandem with the following repositories:
<dl>
	<dt><a href="https://github.com/edwinkapkei/tv-shows-php-implementation" target="_blank">PHP Backend</a></dt>
	<dd>Manages user authentication and tracks the shows the user favorites or adds to their schedule</dd>
	<dt><a href="https://github.com/edwinkapkei/apollo-grapqhl-android-tv-show-implementation" target="_blank">Android Client</a></dt>
	<dd>Client to consume and display Apollo graphql data</dd>
	</br>
</dl>
<dd>Every resource is offline with the exception of TVMaze APIs so in order to run the whole project kindly clone the three repositories.</dd>
<dd>The main thing to take into consideration is the different URLs required for the platforms to interact:</dd>
<dl>
    <dt><a href="https://github.com/edwinkapkei/apollo-graphql-tv-shows/tree/master/src/datasources">Data sources urls</a></dt>
    <dd>The URLs on the two files define the source of the data(TVMaze or localhost)</dd>
    <dt><a href="https://github.com/edwinkapkei/apollo-grapqhl-android-tv-show-implementation/blob/master/app/src/main/java/com/edwinkapkei/tvshows/Apollo.kt">Apollo server URL</a></dt>
    <dd>URL required for the android client to communicate with apollo graphql server</dd>
    <dt><a href="https://www.apollographql.com/docs/android/tutorial/02-add-the-graphql-schema/">Adding Graphql Schema to Android</a></dt>
    <dd>The tutorial page linked above describes how to import the schema to an android client</dd>
</dl>
