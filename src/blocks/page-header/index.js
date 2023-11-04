import { registerBlockType } from '@wordpress/blocks';
import { RichText, useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import icons from '../../icons.js'
import './main.css'

registerBlockType('show-manager/page-header', {
  icon: icons.primary,
	edit({ attributes, setAttributes }) {
    const { content, showCategory } = attributes;
    const blockProps = useBlockProps();

    return (
      <>
      <InspectorControls>
        <PanelBody title={__('General', 'show-manager')}>
          <ToggleControl
            label={__('Show Category', 'show-manager')}
            checked={showCategory}
            onChange={showCategory => setAttributes({showCategory})}
            help={ 
             showCategory ?
             __('Category Shown', 'show-manager') : 
             __('Custom Content Shown', 'show-manager') 
            }
          />
        </PanelBody>
      </InspectorControls>
        <div { ...blockProps }>
            <div class="inner-page-header">
            {
              showCategory ? <h1>{__('Category: Some Category', 'show-manager')}</h1> : 
              <RichText                
                className="page-header"
                tagName="h1"
                placeholder={__('Enter Heading...', 'show-manager')}
                value={content}
                onChange={content => setAttributes({ content })}
                allowedFormats={['core/bold', 'core/italic']}
              /> 
            }              
            </div>
        </div>
      </>
    );
  }
});