import { registerBlockType } from '@wordpress/blocks';
import { RichText, useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import icons from '../../icons'
import './main.css'

registerBlockType('block-additions/page-header', {
  icon: icons.primary,
	edit({ attributes, setAttributes }) {
    const { content, showCategory } = attributes;
    const blockProps = useBlockProps();

    return (
      <>
      <InspectorControls>
        <PanelBody title={__('General', 'block-additions')}>
          <ToggleControl
            label={__('Show Category', 'block-additions')}
            checked={showCategory}
            onChange={showCategory => setAttributes({showCategory})}
            help={ 
             showCategory ?
             __('Category Shown', 'block-additions') : 
             __('Custom Content Shown', 'block-additions') 
            }
          />
        </PanelBody>
      </InspectorControls>
        <div { ...blockProps }>
            <div class="inner-page-header">
            {
              showCategory ? <h1>{__('Category: Some Category', 'block-additions')}</h1> : 
              <RichText                
                className="page-header"
                tagName="h1"
                placeholder={__('Enter Heading...', 'block-additions')}
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