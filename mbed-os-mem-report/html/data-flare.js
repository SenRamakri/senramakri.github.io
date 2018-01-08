var mbed_map = {
    "name": "mbed", 
    "children": [
        {
            "name": "k64f", 
            "children": [
                {
                    "name": "arm", 
                    "children": [
                        {
                            "name": "mbed-cloud-client", 
                            "children": [
                                {
                                    "name": "mbed-client-pal", 
                                    "children": [
                                        {
                                            "name": "Source", 
                                            "children": [
                                                {
                                                    "name": "Port", 
                                                    "children": [
                                                        {
                                                            "name": "Reference-Impl", 
                                                            "children": [
                                                                {
                                                                    "name": "Lib_Specific", 
                                                                    "children": [
                                                                        {
                                                                            "name": "mbedTLS", 
                                                                            "children": [
                                                                                {
                                                                                    "name": "TLS", 
                                                                                    "children": [
                                                                                        {
                                                                                            "name": "pal_plat_TLS.o", 
                                                                                            "children": [
                                                                                                {
                                                                                                    "name": "pal_plat_initTLS", 
                                                                                                    "size": 288
                                                                                                }, 
                                                                                                {
                                                                                                    "name": "pal_plat_initTLSLibrary", 
                                                                                                    "size": 624
                                                                                                }, 
                                                                                                {
                                                                                                    "name": "pal_plat_initTLSConf", 
                                                                                                    "size": 1172
                                                                                                }
                                                                                            ]
                                                                                        }
                                                                                    ]
                                                                                }, 
                                                                                {
                                                                                    "name": "Crypto", 
                                                                                    "children": [
                                                                                        {
                                                                                            "name": "pal_plat_Crypto.o", 
                                                                                            "children": [
                                                                                                {
                                                                                                    "name": "pal_plat_CtrDRBGInit", 
                                                                                                    "size": 944
                                                                                                }
                                                                                            ]
                                                                                        }
                                                                                    ]
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                }, 
                                                                {
                                                                    "name": "OS_Specific", 
                                                                    "children": [
                                                                        {
                                                                            "name": "mbedOS", 
                                                                            "children": [
                                                                                {
                                                                                    "name": "RTOS", 
                                                                                    "children": [
                                                                                        {
                                                                                            "name": "pal_plat_rtos.o", 
                                                                                            "children": [
                                                                                                {
                                                                                                    "name": "pal_plat_osMutexCreate", 
                                                                                                    "size": 144
                                                                                                }
                                                                                            ]
                                                                                        }
                                                                                    ]
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }, 
                                {
                                    "name": "mbed-client", 
                                    "children": [
                                        {
                                            "name": "mbed-client-c", 
                                            "children": [
                                                {
                                                    "name": "source", 
                                                    "children": [
                                                        {
                                                            "name": "sn_grs.o", 
                                                            "children": [
                                                                {
                                                                    "name": "sn_grs_init", 
                                                                    "size": 32
                                                                }
                                                            ]
                                                        }, 
                                                        {
                                                            "name": "sn_nsdl.o", 
                                                            "children": [
                                                                {
                                                                    "name": "sn_nsdl_register_endpoint", 
                                                                    "size": 32
                                                                }, 
                                                                {
                                                                    "name": "sn_nsdl_init", 
                                                                    "size": 104
                                                                }, 
                                                                {
                                                                    "name": "sn_nsdl_local_rx_function", 
                                                                    "size": 32
                                                                }, 
                                                                {
                                                                    "name": "set_NSP_address", 
                                                                    "size": 4
                                                                }, 
                                                                {
                                                                    "name": "sn_nsdl_set_endpoint_location", 
                                                                    "size": 68
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        }, 
                                        {
                                            "name": "source", 
                                            "children": [
                                                {
                                                    "name": "m2mnsdlinterface.o", 
                                                    "children": [
                                                        {
                                                            "name": "_ZN16M2MNsdlInterface17alloc_string_copyEPKht", 
                                                            "size": 46
                                                        }, 
                                                        {
                                                            "name": "_ZN16M2MNsdlInterface10initializeEv", 
                                                            "size": 28
                                                        }
                                                    ]
                                                }, 
                                                {
                                                    "name": "m2mreporthandler.o", 
                                                    "children": [
                                                        {
                                                            "name": "_ZN16M2MReportHandler21set_observation_tokenEPKhh", 
                                                            "size": 35
                                                        }
                                                    ]
                                                }, 
                                                {
                                                    "name": "m2mbase.o", 
                                                    "children": [
                                                        {
                                                            "name": "_ZN7M2MBase9stringdupEPKc", 
                                                            "size": 29
                                                        }, 
                                                        {
                                                            "name": "_ZN7M2MBase17alloc_string_copyEPKhj", 
                                                            "size": 1645
                                                        }, 
                                                        {
                                                            "name": "_ZN7M2MBase16create_path_baseERKS_PKc", 
                                                            "size": 349
                                                        }, 
                                                        {
                                                            "name": "_ZN7M2MBaseC2ERKN3m2m6StringENS_4ModeES3_PcbbNS_8DataTypeE", 
                                                            "size": 3757
                                                        }, 
                                                        {
                                                            "name": "_ZN7M2MBase17alloc_string_copyEPKc", 
                                                            "size": 83
                                                        }
                                                    ]
                                                }, 
                                                {
                                                    "name": "m2mstring.o", 
                                                    "children": [
                                                        {
                                                            "name": "_ZN3m2m6StringaSERKS0_", 
                                                            "size": 165
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }, 
                                {
                                    "name": "factory-configurator-client", 
                                    "children": [
                                        {
                                            "name": "fcc-output-info-handler", 
                                            "children": [
                                                {
                                                    "name": "source", 
                                                    "children": [
                                                        {
                                                            "name": "fcc_output_info_handler.o", 
                                                            "children": [
                                                                {
                                                                    "name": "fcc_store_warning_info", 
                                                                    "size": 465
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }, 
                        {
                            "name": "mbed-os", 
                            "children": [
                                {
                                    "name": "features", 
                                    "children": [
                                        {
                                            "name": "FEATURE_COMMON_PAL", 
                                            "children": [
                                                {
                                                    "name": "mbed-coap", 
                                                    "children": [
                                                        {
                                                            "name": "source", 
                                                            "children": [
                                                                {
                                                                    "name": "sn_coap_protocol.o", 
                                                                    "children": [
                                                                        {
                                                                            "name": "sn_coap_protocol_init", 
                                                                            "size": 60
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }, 
                                                {
                                                    "name": "nanostack-hal-mbed-cmsis-rtos", 
                                                    "children": [
                                                        {
                                                            "name": "ns_hal_init.o", 
                                                            "children": [
                                                                {
                                                                    "name": "ns_hal_init", 
                                                                    "size": 1024
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }, 
                                {
                                    "name": "platform", 
                                    "children": [
                                        {
                                            "name": "mbed_retarget.o", 
                                            "children": [
                                                {
                                                    "name": "_Znaj", 
                                                    "size": 838
                                                }, 
                                                {
                                                    "name": "_Znwj", 
                                                    "size": 7260
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }, 
        {
            "name": "$Super$$calloc [FUNCTION]", 
            "children": [
                {
                    "name": "$Super$$calloc", 
                    "size": 10053
                }
            ]
        }, 
        {
            "name": "C:", 
            "children": [
                {
                    "name": "Keil_v5", 
                    "children": [
                        {
                            "name": "ARM", 
                            "children": [
                                {
                                    "name": "ARMCC", 
                                    "children": [
                                        {
                                            "name": "bin", 
                                            "children": [
                                                {
                                                    "name": "..", 
                                                    "children": [
                                                        {
                                                            "name": "lib", 
                                                            "children": [
                                                                {
                                                                    "name": "armlib", 
                                                                    "children": [
                                                                        {
                                                                            "name": "c_w.l(fopen_locked.o)", 
                                                                            "children": [
                                                                                {
                                                                                    "name": "fopen", 
                                                                                    "size": 168
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }, 
        {
            "name": "_ZN3m2m6StringC2Ev [FUNCTION]", 
            "children": [
                {
                    "name": "_ZN3m2m6StringC2Ev", 
                    "size": 1
                }
            ]
        }
    ]
}