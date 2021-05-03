function urlSlug(title) {
    let newArr = title.split(" ")
    let slug = newArr.filter(blank => blank !== "")
    return slug.join("-").toLowerCase()
    }
    
    
    
    console.log(urlSlug("Winter Is Coming")) // winter-is-coming
    console.log(urlSlug(" Winter Is Coming")) // // winter-is-coming
    console.log(urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone")) // a-mind-needs-books-like-a-sword-needs-a-whetstone