export function EnumService() { }

EnumService.prototype.Set = function (data) {
    if (!Array.isArray(data)) {
        console.error("枚举输入参数必须是数组");
        return false;
    }
    if (data.length == 0) {
        console.error("枚举输入参数不能为空");
        return false;
    }
    if (!window.__vplugin_enums) {
        window.__vplugin_enums = {}
    }
    for (var item in window.__vplugin_enums) {
        console.error("枚举数据已存在,不允许重复赋值")
        return false;
    }
    data.forEach(function (item) {
        if (!window.__vplugin_enums[item.belong_enum])
            window.__vplugin_enums[item.belong_enum] = [];
        window.__vplugin_enums[item.belong_enum].push(item);
    })
    return true;
}

EnumService.prototype.Get = function (type) {
    if (!type) return [];
    return window.__vplugin_enums[type] || [];
}

EnumService.prototype.Gets = function (types) {
    if (!types) return window.__vplugin_enums;
    var data = [];
    types.split(",").forEach(function (item) {
        data.push(window.__vplugin_enums[item]);
    })
    return data;
}

EnumService.prototype.GetTitle = function (type, value) {
    var data = this.Get(type)
    var result = value;
    data.forEach(function (item) {
        if (item.value == value) {
            result = item.description
            return;
        }
    })
    return result;
}