function loadTree() {
    var tree = $('#jstree');
    tree.jstree('refresh');
}
function treeChange(e, data) {
    if (data && data.selected.length > 0) {
        var node = data.instance.get_node(data.selected[0]);
        loadLicence(node.id);
    } else {
        loadLicence(null);
    }    
}

function getTreeUrl() {
    return '/TreeView/tree/' + $('#cComplete').is(':checked');
}

function initTreeFunction(){
    $(function() {
        $('#jstree')
        .on('changed.jstree', treeChange)
        .jstree({
            'core' : {
                "multiple" : false,
                'data' : {
                    'url' : getTreeUrl
                }
            }
        });
        $('input[name="catalogueType"]').change(loadTree);
        treeChange();
    })
}

