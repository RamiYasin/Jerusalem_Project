


export function ShopPostItem (){

    return (
        <View style={styles.container}>
            <View style={styles.postContainer}>
                <Image source={source} style={styles.postImage}>

                </Image>
            </View>
            <View>
                <PostActionBar>
                    
                </PostActionBar>
            </View>
        </View>
    )

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        marginLeft:30
    },
    postContainer: {
        borderWidth: 1,
        borderColor: '#EAEAEA',
        borderRadius: 16,
        width: 300, // Setting a width for the post container
        aspectRatio: 1, // Adjust this ratio as needed
    },
    postImage: {
        height: hp('40%'),
        borderRadius: 16,
    },
});