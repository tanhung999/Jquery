listProduct =[];
curItem=null;

$(function () {
    var data = [
        {   
            "value":"iPhone 14 Pro Max 128GB",
            "label":"iPhone 14 Pro Max 128GB - 27990000",
            "maSP":"m001",
            "name":"iPhone 14 Pro Max 128GB",
            "gia":27990000,
            "dvt":"cái",
            "loai":"Điện thoại"
        },
        {
            "value":"iPhone 14 Pro 128GB",
            "label":"iPhone 14 Pro  128GB - 25490000",
            "maSP":"m002",
            "name":"iPhone 14 Pro 128GB",
            "gia":25490000,
            "dvt":"cái",
            "loai":"Điện thoại"
        },
        {
            "value":"iPhone 14 128GB",
            "label":"iPhone 14  128GB - 19990000",
            "maSP":"m003",
            "name":"iPhone 14 128GB",
            "gia":19990000,
            "dvt":"cái",
            "loai":"Điện thoại"
        },
        {
            "value":"Laptop Asus TUF Gaming FX506LHB-HN188W i5 10300H/8GB/512GB/15.6\"FHD/GTX 1650 4GB/Win11",
            "label":"Laptop Asus TUF Gaming FX506LHB-HN188W i5 10300H/8GB/512GB/15.6\"FHD/GTX 1650 4GB/Win11 - 15890000",
            "maSP":"lp001",
            "name":"Laptop Asus TUF Gaming FX506LHB-HN188W i5 10300H/8GB/512GB/15.6\"FHD/GTX 1650 4GB/Win11",
            "gia":15890000,
            "dvt":"cái",
            "loai":"Laptop"
        },
        {
            "value":"Laptop MSI Gaming GF63 Thin 11SC-1090VN i5 11400H/8GB/512GB/15.6\"FHD/GeForce GTX 1650 4GB/Win11",
            "label":"Laptop MSI Gaming GF63 Thin 11SC-1090VN i5 11400H/8GB/512GB/15.6\"FHD/GeForce GTX 1650 4GB/Win11 - 15590000",
            "maSP":"lp001",
            "name":"Laptop MSI Gaming GF63 Thin 11SC-1090VN i5 11400H/8GB/512GB/15.6\"FHD/GeForce GTX 1650 4GB/Win11",
            "gia":15590000,
            "dvt":"cái",
            "loai":"Laptop"
        }
    ];
    $("#txtSanPham").autocomplete({
        source: data,
        select:function(e,ui){
            curItem=ui.item;
            $("#lblSelect").html("Bạn đã chọn <b>[ "+ ui.item.name+" ] </b> với giá"+ui.item.gia);
        }
    });
});

function addProduct () {
    sl=parseInt($("#txtNumber").val());
    curItem.SoLuong=sl;
    curItem.ThanhTien=sl*curItem.gia;
    var i=0;
    for (i=0;i<listProduct.length;i++) {
        if(listProduct[i].maSP==curItem.maSP){
            break;
        }
    }
    if(i<listProduct.length){
        // Tồn tại trong list 
        curItem.SoLuong=sl+listProduct[i].SoLuong;
        curItem.ThanhTien=curItems.SoLuong*curItem.gia;
        listProduct[i]=curItem

    }
    else {
        listProduct.push(curItem);

    }
    TinhTongDon();
}
function TinhTongDon () {
    tong=0;
    for (i=0;i<listProduct.length;i++) {
        tong=tong+listProduct[i].ThanhTien;
    }
    $("#txtTongTien").html(formatNumber(tong));
    $("#totalSP").text(listProduct.length);
    $("#ulCart").html="";
    $("#cartTemplate").tmpl(listProduct).appendTo("#ulCart")
}
function delProduct (id) {
    var i=0;
    for (i=0; i<listProduct.length; i++) {
        if(listProduct[i].maSP==id){
            break;
        }
    
    }
    if(i<listProduct.length) {
        listProduct.splice(i,1);
        TinhTongDon();
    }
}
function formatNumber (n) {
    return new Intl.NumberFormat('vi-VN',{maximumSignificantDigits:3}).format(n);
}