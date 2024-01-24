import { View, Text } from 'react-native'
type BackgroundTextProps = {
  textClass: string,
  viewClass?: string,
}
export const BackgroundText = ({textClass, viewClass}: BackgroundTextProps) => {
  return (
    <View
      className={viewClass}
    >
      <Text
        className={textClass}
      >
        Saturday morning was come, and all the summer world was bright and fresh,
        and brimming with life. There was a song in every heart; and if the heart
        was young the music issued at the lips. There was cheer in every face and
        a spring in every step. The locust-trees were in bloom and the fragrance
        of the blossoms filled the air. Cardiff Hill, beyond the village and above
        it, was green with vegetation and it lay just far enough away to seem a
        Delectable Land, dreamy, reposeful, and inviting. Tom appeared on the
        sidewalk with a bucket of whitewash and a long-handled brush. He surveyed
        the fence, and all gladness left him and a deep melancholy settled down
        upon his spirit. Thirty yards of board fence nine feet high. Life to him
        seemed hollow, and existence but a burden. Sighing, he dipped his brush
        and passed it along the topmost plank; repeated the operation; did it
        again; compared the insignificant whitewashed streak with the far-reaching
        continent of unwhitewashed fence, and sat down on a tree-box discouraged.
        Jim came skipping out at the gate with a tin pail, and singing Buffalo
        Gals. Bringing water from the town pump had always been hateful work in
        Tom’s eyes, before, but now it did not strike him so. He remembered that
        there was company at the pump. White, mulatto, and negro boys and girls
        were always there waiting their turns, resting, trading playthings,
        quarrelling, fighting, skylarking. And he remembered that although the
        pump was only a hundred and fifty yards off, Jim never got back with a
        bucket of water under an hour – and even then somebody generally had to go
        after him. Tom said: “Say, Jim, I’ll fetch the water if you’ll whitewash
        some.” Jim shook his head and said: “Can’t, Mars Tom. Ole missis, she tole
        me I got to go an’ git dis water an’ not stop foolin’ roun’ wid anybody.
        She say she spec’ Mars Tom gwine to ax me to whitewash, an’ so she tole me
        go ‘long an’ ‘tend to my own business – she ‘lowed she’d ‘tend to de
        whitewashin’.” “Oh, never you mind what she said, Jim. That’s the way she
        always talks. Gimme the bucket – I won’t be gone only a a minute. She
        won’t ever know.” “Oh, I dasn’t, Mars Tom. Ole missis she’d take an’ tar
        de head off’n me. ‘Deed she would.” “She! She never licks anybody – whacks
        ’em over the head with her thimble – and who cares for that, I’d like to
        know. She talks awful, but talk don’t hurt – anyways it don’t if she don’t
        cry. Jim, I’ll give you a marvel. I’ll give you a white alley!”
      </Text>
    </View>
  )
}
