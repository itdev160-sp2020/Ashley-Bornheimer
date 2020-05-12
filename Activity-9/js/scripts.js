$(function () {
    // var db = firebase.firestore();
    // db.collection('quotes').get().then((snapshot) => {
    //   snapshot.forEach((doc) => {
    //     console.log(`${doc.id} => ${doc.data()}`);
    //   })
    // });

    var data = [
        {
            id: 1,
            title: 'Education',
            body: 'An investment in knowledge pays the best interest.',
            author: 'Benjamin Franklin'
        },
        {
            id: 2,
            title: 'Love',
            body:
                'Life is what happens when your busy making other plans.',
            author: 'John Lennon'
        },
        {
            id: 3,
            title: 'Fitness',
            body:
                'Take care of your body. Its the only place you ave to live.',
            author: 'Jim Rohn'
        },
        {
            id: 4,
            title: 'Faith',
            body:
                'Faith is taking the first step. Even when you dont see the whole staircase.',
            author: 'Martin Luther King Jr.'
        },
        {
            id: 5,
            title: 'Creativity',
            body:
                'Creativity is intelligence having fun.',
            author: 'Albert Einstein'
        }
    ]

    var $nav = $('#nav-container')
    var $intro = $('#intro')
    var $posts = $('#post-container')

    function initPosts() {
        for (var i = 0; i < data.length; i++) {
            // Create elements
            var postId = 'post-' + data[i].id,
                $post = $('<section class="post"></section'),
                $title = $('<h2 class="title"></h2>'),
                $body = $('<p class="quote"></p>'),
                $body = $('<blockquote></blockquote>')
                ; ($author = $('<span class="author"></span>')),
                    ($navItem = $('<li></li>'))

            // Add post data
            $title.text(data[i].title)
            $body.text(data[i].body)
            $author.text(data[i].author)

            // Add nav item data
            $navItem.attr('id', data[i].id)
            $navItem.text(data[i].title)

            // Combine post elements
            $post.attr('id', postId)
            $post.append($title)
            $post.append($body)
            $post.append($author)

            // Add post and nav elements to page
            $posts.append($post)
            $nav.append($navItem)

            // Wire up nav item click event
            $navItem.on('click', function () {
                var id = $(this).attr('id')
                $posts.children().hide()
                $posts.find('#post-' + id).fadeIn()
            })

            // Hide all posts and show the intro
            $posts.children('.post').hide()
            $intro.fadeIn(1000)
        }
    }

    initPosts()
})
