// https://next.json-generator.com/EyiVRpvlK
[
  {
    'repeat(5, 10)': {
      id: '{{index(1)}}',
      guid: '{{guid()}}',
      coverColor: '{{random("blue", "brown", "green")}}',
      coverPicture() {
        return `https://picsum.photos/1280/768?random=${this.id}`;
      },
      author: {
        first: '{{firstName()}}',
        last: '{{surname()}}',
        fullName() {
          return `${this.first} ${this.last}`;
        },
        email(tags) {
          return `${this.first}.${this.last}@gmail.com`.toLowerCase();
        },
        avatar() {
          return `https://api.adorable.io/avatars/285/${this.email}.png`;
        },
        social: [
          {
            type: 'linkedin',
            username: 'maiquemalmeida',
            url: 'https://www.linkedin.com/in/maiquealmeida/'
          },
          {
            type: 'instagram',
            username: '@maiquemalmeida',
            url: 'https://www.instagram.com/maiquemalmeida/'
          },
          {
            type: 'twitter',
            username: '@maiquemalmeida',
            url: 'https://twitter.com/maioquemalmeida'
          }
        ]
      },
      createdAt: '{{moment(this.date(new Date(2019, 0, 1), new Date())).format("YYYY-MM-DD HH:mm:ss")}}',
      createdAtHumanized() {
        const d1 = moment(this.createdAt, "YYYY-MM-DD HH:mm:ss");
        const d2 = moment();
        return `ha ${moment.duration(d1.diff(d2)).locale('pt-BR').humanize(true)}`;
      },
      readTime: '{{random(3,4,5,6,7,10)}} minutos',
      title: '{{lorem(1, "sentence")}}',
      resume: '{{lorem(1, "sentence")}}',
      body: '{{lorem(15, "paragraphs")}}',
      tags: [
        {
          'repeat(3)': '{{lorem(1, "words")}}'
        }
      ],
      comments: [{
        'repeat(0, 13)': {
          createdAt: '{{moment(this.date(new Date(2019, 0, 1), new Date())).format("YYYY-MM-DD HH:mm:ss")}}',
          createdAtHumanized() {
            const d1 = moment(this.createdAt, "YYYY-MM-DD HH:mm:ss");
            const d2 = moment();
            return `ha ${moment.duration(d1.diff(d2)).locale('pt-BR').humanize(true)}`;
          },
          comment: '{{lorem(2, "sentence")}}',
          author: {
            first: '{{firstName()}}',
            last: '{{surname()}}',
            fullName() {
              return `${this.first} ${this.last}`;
            },
            email(tags) {
              return `${this.first}.${this.last}@gmail.com`.toLowerCase();
            },
            avatar() {
              return `https://api.adorable.io/avatars/285/${this.email}.png`;
            },
            social:
            {
              type: '{{random("google", "facebook", "twitter", "github")}}',
              username: '{{lorem(1, "words")}}',
              url() {
                return `https://www.${this.type}.com/${this.username}/`;
              }
            },
          },
        }
      }],
      commentsCount() {
        return this.comments.length;
      },
      viewsCount: '{{integer(50,123)}} ',
    }
  }
]