import { registerBlockType } from '@wordpress/blocks';
import { RichText, useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { PanelBody, ColorPalette } from '@wordpress/components';
import block from './block.json';
import icons from '../../icons'
import './main.css';

registerBlockType(block.name, {
  icon: icons.primary,
  edit({ attributes, setAttributes }) {
    const { content, underline_color } = attributes;
    const blockProps = useBlockProps()

    const colors = [
        { name: 'Red', color: '#f87171' },
        { name: 'Indigo', color: '#818cf8' }
    ];

    return (
      <>
        <InspectorControls>
          <PanelBody title={__('Colors', 'udemy-plus')}>
            <ColorPalette
              colors = { colors }
              value = { underline_color }
              onChange = { color => setAttributes({underline_color: color}) }
            />
          </PanelBody>  
        </InspectorControls>
        <div {...blockProps}>
          <RichText
            className="fancy-header"
            tagName="h2"
            placeholder={__('Enter Heading...', 'block-additions')}
            value={content}
            onChange={newVal => setAttributes({ content: newVal })}
            allowedFormats={['core/bold', 'core/italic']}
          />
        </div>
      </>
    );
  },
  save({ attributes }) {
    const { content, underline_color } = attributes;
    const blockProps = useBlockProps.save({
        className: 'fancy-header',
        style: {
            'background-image': `
            linear-gradient(transparent,transparent),
            linear-gradient(${underline_color}, ${underline_color});
            `
        }
    }); // Moved from here

    return (
      <div >
        <RichText.Content
        {...blockProps}          
          tagName="h2"
          value={content}
        />
      </div>
    );
  }
});
