// 名前付きインポートの例
import {
  export_variable_with_declaration,
  export_variable_after_declaration,
  export_function_after_declaration,
  export_function_with_declaration,
  ClassExport,
  exported_with_alias
} from './export';
console.log(export_variable_with_declaration);
console.log(export_variable_after_declaration);
export_function_after_declaration();
export_function_with_declaration();
const ce = new ClassExport();
ce.to_s();
console.log(exported_with_alias);

// 名前付きインポート(エイリアス付き)の例
import { export_variable_with_declaration as export_variable_with_declaration_dup } from './export';
console.log(export_variable_with_declaration_dup);

// デフォルトインポートと、同時に名前付きインポートも行う例
import default_exported_variable, {
  updatable_variable_by_exported_function,
  update_variable
} from './export';
console.log(default_exported_variable);
console.log(updatable_variable_by_exported_function);
update_variable();
console.log(updatable_variable_by_exported_function);

// デフォルトエクスポートされたものを、エイリアス付きでインポートする例
import { default as default_exported_with_alias } from './export';
console.log(default_exported_with_alias);

// 名前空間として全インポートの例
import * as import_with_namespace from './export';
console.log(import_with_namespace.export_variable_after_declaration);

// モジュールの構文実行だけの例。
import './export';
