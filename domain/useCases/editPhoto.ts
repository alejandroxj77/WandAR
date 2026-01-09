import IMGLYEditor, {
    EditorPreset,
    EditorSettingsModel,
    SourceType,
} from '@imgly/editor-react-native';

export const design_editor_solution = async (source: string): Promise<void> => {
    const settings = new EditorSettingsModel({
        userId: 'UNIQUE_USER_ID',
    });
    const result = await IMGLYEditor?.openEditor(
        settings,
        {
            source: source,
            type: SourceType.IMAGE,

        },
        EditorPreset.DESIGN,
    );
};