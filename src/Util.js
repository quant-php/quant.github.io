

const sortCategoryItems = items => {
    if (items[0].id.startsWith("toolbox")) {
        items.sort((a, b) => {
            return a.id.split("/")[1].split(".").pop() > b.id.split("/")[1].split(".").pop() ? 1 : -1
        })
    }

    return items;
};

const sortSidebarItems = items => {
    let result = items.map((item) => {
        if (item.type === 'category') {
            return {...item, items: sortSidebarItems(item.items)};
        }

        return item;
    });

    sortCategoryItems(result);

    return result;
};

module.exports = {sortSidebarItems};