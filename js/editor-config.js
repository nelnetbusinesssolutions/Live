CKEDITOR.editorConfig = function (config) {
	config.toolbar =
		[
			['MindTouchSave', 'MindTouchCancel'],
			['ViewMenu'],
			['WhoIsEditing'],
			['Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord'],
			['Transformations'],
			['Undo', 'Redo', '-', 'Find', 'Replace', '-', 'SelectAll'],
			['HorizontalRule', 'SpecialChar', 'PageBreak', 'Transclusion', 'LearningPath'],
			'/',
			['Font', 'FontSize'],
			['TextColor', 'BGColor'],
			['Bold', 'Italic', 'Underline', 'Strike', '-', 'Subscript', 'Superscript', 'Code', 'PlainText', 'RemoveFormat'],
			['NumberedList', 'BulletedList', 'DefinitionList', '-', 'Outdent', 'Indent'],
			['JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock'],
			'/',
			['Normal', 'H3', 'H4', 'H5', 'StylesMenu'],
			['MindTouchLink', 'Unlink', 'Anchor', 'MindTouchTable', 'MindTouchImage', 'Video', 'MindTouchTemplates']
		];
};

CKEDITOR.editorConfig = function (config) {
	config.stylesSet.map(function (st) {
		if (st.name === 'Conditional text (pro member only)') {
			st.name = 'Conditional text (editors only)';
		}
		return st;
	});
	config.stylesSet.push({ name: 'Internal Users', element: 'div', wrap: true, attributes: { 'class': 'mt-style-conditional', 'if': 'user.groups["NBS Viewer"] || user.groups["PRO Author"] || user.groups["PRO Editor"] || user.groups["PRO Admin"]' } });
	config.stylesSet.push({ name: 'HE and K12 School Users', element: 'div', wrap: true, attributes: { 'class': 'mt-style-conditional', 'if': 'user.groups["Nelnet Campus Commerce Schools"] ||  user.groups["K12 FACTS Schools"]' } });
	config.stylesSet.push({ name: 'Gray Header Table', element: 'table', attributes: { 'class': 'blue-rows' } });
	config.stylesSet.push({ name: 'SIS Page Info Table', element: 'table', attributes: { 'class': 'page-info' } });
}