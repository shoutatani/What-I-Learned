// 変数の宣言だけして、その後にexport
const export_variable_after_declaration = "export_variable_after_declaration in export.js";
export { export_variable_after_declaration };

// 変数の宣言と同時にexport
export const export_variable_with_declaration = "export_variable_with_declaration in export.js";

// 関数の宣言だけして、その後にexport
function export_function_after_declaration() {
  console.log("export_function_after_declaration in export.js");
}
export { export_function_after_declaration };

// 関数の宣言と同時にexport
export function export_function_with_declaration() {
  console.log("export_function_with_declaration in export.js");
}

// exportする変数と、その変数を変更する関数をexportして、
// export先で変数を変更できる例
export let updatable_variable_by_exported_function = 0;
export function update_variable(){
  updatable_variable_by_exported_function += 1;
}

// classのexportの例
export class ClassExport {
  to_s() {
    console.log("ClassExport in export.js");
  }
}

// 変数のdefault exportの例
let default_exported_variable = "default_exported_variable in export.js";
export default default_exported_variable;

// 変数宣言と同時にデフォルトエクスポートはできない
// export default const foo = "foo", bar = "bar";

// エイリアスをつけたexportの例
// (as default とすれば、エイリアス付きのデフォルトエクスポートが可能)
const export_with_alias = "alias export in export.js"
export { export_with_alias as exported_with_alias };

// 再エクスポートの例
export * from './import';