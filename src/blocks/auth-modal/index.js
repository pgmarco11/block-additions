import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import icons from '../../icons'
import './main.css'

registerBlockType('block-additions/auth-modal', {
  icon: {
    src: icons.primary
  },
  edit({ attributes, setAttributes }) {
    const { showRegister } = attributes;
    const blockProps = useBlockProps();

    return (
      <>
        <InspectorControls>
          <PanelBody title={ __('General', 'block-additions') }>
            <ToggleControl
            label={__('Show Register','block-additions')}
            help={
              showRegister ?
              __('Showing Registratin Form','block-additions') :
              __('Hiding Registration Form', 'block-additions')
            }
            checked={showRegister}
            onchange={showRegister => setAttributes({showRegister})}
            />
          </PanelBody>
        </InspectorControls>
        <div { ...blockProps }>
          {__('This block is not previewable from the editor. View your site for a live demo.', 'block-additions')}
        </div>
      </>
    );
  }
});