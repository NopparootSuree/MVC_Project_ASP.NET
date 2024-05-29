

$(document).ready(function () {
    $('#tblData').DataTable({
        "ajax": { url: 'https://localhost:7145/Admin/Product/GetAll' },
        "columns": [
            { data: 'title', "width": "20%" },
            { data: 'isbn', "width": "10%" },
            { data: 'price', "width": "5%" },
            { data: 'author', "width": "20%" },
            { data: 'category.name', "width": "20%" },
            {
                data: 'id',
                "render": function (data) {
                    return `<div class="w-75 btn-group" role="group">
                                <a href="/admin/product/upsert?id=${data}" class="btn btn-primary mx-2">
                                    <i class="bi bi-pencil-square"> Edit</i>
                                </a>
                                <a href="/admin/product/delete/${data}" class="btn btn-danger mx-2">
                                    <i class="bi bi-trash">Delete</i>
                                </a>
                            </div>`
                },
                "width": "30%"
            }
        ]
    });
});