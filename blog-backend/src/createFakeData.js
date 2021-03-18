import Post from './models/post';

export default function createFakeData() {
  // 0, 1, ... 39 로 이루어진 배열을 생성한 후 포스트 데이터로 변환
  const posts = [...Array(40).keys()].map((i) => ({
    title: `포스트 #${i}`,
    // https://www.lipsum.com/ 에서 복사한 200자 이상의 텍스트
    body:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur cursus enim at ligula ullamcorper, euismod gravida elit faucibus. Fusce aliquet elit in erat sagittis fringilla. Morbi ut tellus urna. Aenean placerat ornare gravida. Cras ornare laoreet nisl non mattis. Nulla in sodales tellus, at lobortis nunc. Donec efficitur at est at pulvinar. Nulla mattis eu mauris sit amet euismod. Sed eu dui eget sapien viverra mollis sed quis nisl. Suspendisse convallis rhoncus lacinia.Pellentesque diam elit, rutrum eu dapibus vitae, euismod sed nibh. Nunc eu quam lacinia, finibus erat at, consequat purus. Mauris velit purus, vestibulum vel felis a, pretium viverra felis.',
    tags: ['가짜', '데이터'],
  }));

  Post.insertMany(posts, (err, docs) => {
    console.log(docs);
  });
}
