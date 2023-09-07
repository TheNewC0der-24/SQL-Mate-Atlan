import AceEditor from "react-ace";
import "ace-builds/src-min-noconflict/mode-mysql";
import "ace-builds/src-noconflict/theme-sqlserver";
import "ace-builds/src-min-noconflict/ext-language_tools";

const SqlEditor = ({ setValue, value }) => {

  return (
    <AceEditor
      id="editor"
      aria-label="editor"
      mode="mysql"
      theme="sqlserver"
      name="sql-editor"
      width="100%"
      fontSize={18}
      minLines={15}
      maxLines={10}
      showPrintMargin={false}
      showGutter
      placeholder="Select query from the Available Queries to run.."
      editorProps={{ $blockScrolling: true }}
      setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: true,
        showLineNumbers: true,
      }}
      value={value}
      onChange={(value) => setValue(value)}
    />
  );
}

export default SqlEditor;
