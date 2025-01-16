import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl, CheckboxControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import icons from '../../icons'
import './main.css'

registerBlockType('block-additions/header-tools', {
  icon: {
    src: icons.primary
  },
  edit({ attributes, setAttributes }) {
    const {showAuth} = attributes;
    const blockProps = useBlockProps();

    return (
      <>
        <InspectorControls>
          <PanelBody title={ __('General', 'block-additions') }>
            <SelectControl
                label={__('Show Login/Reigster Link', 'block-additions')}
                value={showAuth}
                options= {[
                    { label: __('No', 'block-additions'), value: false},
                    { label: __('Yes', 'block-additions'), value: true}
                ]}
                onChange = { newVal => setAttributes({ showAuth: (newVal === "true")}) }
            />
            <CheckboxControl
            label={__('Show Login/Reigster Link', 'block-additions')}
            help={
                showAuth ?
                __('Showing Link', 'block-additions') :
                __('Hiding Link', 'block-additions')
            }
            checked={showAuth}
            onChange={showAuth => setAttributes({showAuth})}
            />
          </PanelBody>
        </InspectorControls>
        <div { ...blockProps }>
        {
            showAuth && 
            <a className="signin-link open-modal" href="#">
            <div className="signin-icon">
              <i className="bi bi-person-circle"></i>
            </div>
            <div className="signin-text">
              <small>Hello, Sign in</small>
              My Account
            </div>
          </a>
        }
         
        </div>
      </>
    );
  }
});