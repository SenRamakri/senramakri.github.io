var mbed_test_map = {
    "name": "test", 
    "children": [
        {
            "name": ".", 
            "children": [
                {
                    "name": "features", 
                    "children": [
                        {
                            "name": "filesystem", 
                            "children": [
                                {
                                    "name": "littlefs", 
                                    "children": [
                                        {
                                            "name": "TESTS", 
                                            "children": [
                                                {
                                                    "name": "filesystem", 
                                                    "children": [
                                                        {
                                                            "name": "dirs", 
                                                            "size": 10
                                                        }, 
                                                        {
                                                            "name": "files", 
                                                            "size": 7
                                                        }, 
                                                        {
                                                            "name": "interspersed", 
                                                            "size": 4
                                                        }, 
                                                        {
                                                            "name": "seek", 
                                                            "size": 9
                                                        }
                                                    ]
                                                }, 
                                                {
                                                    "name": "filesystem_recovery", 
                                                    "children": [
                                                        {
                                                            "name": "resilience", 
                                                            "size": 1
                                                        }, 
                                                        {
                                                            "name": "wear_leveling", 
                                                            "size": 1
                                                        }
                                                    ]
                                                }, 
                                                {
                                                    "name": "filesystem_retarget", 
                                                    "children": [
                                                        {
                                                            "name": "dirs", 
                                                            "size": 10
                                                        }, 
                                                        {
                                                            "name": "files", 
                                                            "size": 7
                                                        }, 
                                                        {
                                                            "name": "interspersed", 
                                                            "size": 4
                                                        }, 
                                                        {
                                                            "name": "seek", 
                                                            "size": 9
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
                            "name": "frameworks", 
                            "children": [
                                {
                                    "name": "utest", 
                                    "children": [
                                        {
                                            "name": "TESTS", 
                                            "children": [
                                                {
                                                    "name": "unit_tests", 
                                                    "children": [
                                                        {
                                                            "name": "basic_test", 
                                                            "size": 2
                                                        }, 
                                                        {
                                                            "name": "basic_test_default", 
                                                            "size": 2
                                                        }, 
                                                        {
                                                            "name": "case_async_validate", 
                                                            "size": 6
                                                        }, 
                                                        {
                                                            "name": "case_control_async", 
                                                            "size": 7
                                                        }, 
                                                        {
                                                            "name": "case_control_repeat", 
                                                            "size": 4
                                                        }, 
                                                        {
                                                            "name": "case_selection", 
                                                            "size": 3
                                                        }, 
                                                        {
                                                            "name": "case_setup_failure", 
                                                            "size": 3
                                                        }, 
                                                        {
                                                            "name": "case_teardown_failure", 
                                                            "size": 3
                                                        }, 
                                                        {
                                                            "name": "control_type", 
                                                            "size": 4
                                                        }, 
                                                        {
                                                            "name": "minimal_async_scheduler", 
                                                            "size": 4
                                                        }, 
                                                        {
                                                            "name": "minimal_scheduler", 
                                                            "size": 8
                                                        }, 
                                                        {
                                                            "name": "test_assertion_failure_test_setup", 
                                                            "size": 1
                                                        }, 
                                                        {
                                                            "name": "test_setup_case_selection_failure", 
                                                            "size": 2
                                                        }, 
                                                        {
                                                            "name": "test_setup_failure", 
                                                            "size": 2
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
                            "name": "netsocket", 
                            "children": [
                                {
                                    "name": "cellular", 
                                    "children": [
                                        {
                                            "name": "generic_modem_driver", 
                                            "children": [
                                                {
                                                    "name": "TESTS", 
                                                    "children": [
                                                        {
                                                            "name": "unit_tests", 
                                                            "children": [
                                                                {
                                                                    "name": "default", 
                                                                    "size": 3
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
                            "name": "TESTS", 
                            "children": [
                                {
                                    "name": "filesystem", 
                                    "children": [
                                        {
                                            "name": "fat_filesystem", 
                                            "size": 4
                                        }, 
                                        {
                                            "name": "heap_block_device", 
                                            "size": 1
                                        }, 
                                        {
                                            "name": "mbr_block_device", 
                                            "size": 3
                                        }, 
                                        {
                                            "name": "multipart_fat_filesystem", 
                                            "size": 3
                                        }, 
                                        {
                                            "name": "util_block_device", 
                                            "size": 3
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }, 
                {
                    "name": "TESTS", 
                    "children": [
                        {
                            "name": "events", 
                            "children": [
                                {
                                    "name": "queue", 
                                    "size": 13
                                }, 
                                {
                                    "name": "timing", 
                                    "size": 3
                                }
                            ]
                        }, 
                        {
                            "name": "mbed_drivers", 
                            "children": [
                                {
                                    "name": "c_strings", 
                                    "size": 8
                                }, 
                                {
                                    "name": "echo", 
                                    "size": 1
                                }, 
                                {
                                    "name": "flashiap", 
                                    "size": 3
                                }, 
                                {
                                    "name": "generic_tests", 
                                    "size": 4
                                }, 
                                {
                                    "name": "lp_ticker", 
                                    "size": 11
                                }, 
                                {
                                    "name": "lp_timeout", 
                                    "size": 6
                                }, 
                                {
                                    "name": "lp_timer", 
                                    "size": 9
                                }, 
                                {
                                    "name": "mem_trace", 
                                    "size": 6
                                }, 
                                {
                                    "name": "race_test", 
                                    "size": 2
                                }, 
                                {
                                    "name": "rtc", 
                                    "size": 14
                                }, 
                                {
                                    "name": "sleep_lock", 
                                    "size": 2
                                }, 
                                {
                                    "name": "stats", 
                                    "size": 4
                                }, 
                                {
                                    "name": "stl_features", 
                                    "size": 4
                                }, 
                                {
                                    "name": "ticker", 
                                    "size": 11
                                }, 
                                {
                                    "name": "timer", 
                                    "size": 14
                                }
                            ]
                        }, 
                        {
                            "name": "mbed_functional", 
                            "children": [
                                {
                                    "name": "callback", 
                                    "size": 6
                                }, 
                                {
                                    "name": "callback_big", 
                                    "size": 6
                                }, 
                                {
                                    "name": "callback_small", 
                                    "size": 6
                                }, 
                                {
                                    "name": "functionpointer", 
                                    "size": 2
                                }
                            ]
                        }, 
                        {
                            "name": "mbed_hal", 
                            "children": [
                                {
                                    "name": "critical_section", 
                                    "size": 2
                                }, 
                                {
                                    "name": "lp_ticker", 
                                    "size": 6
                                }, 
                                {
                                    "name": "lp_us_tickers", 
                                    "size": 6
                                }, 
                                {
                                    "name": "rtc_time", 
                                    "size": 6
                                }, 
                                {
                                    "name": "rtc_time_conv", 
                                    "size": 2
                                }, 
                                {
                                    "name": "sleep_manager", 
                                    "size": 1
                                }, 
                                {
                                    "name": "sleep_manager_racecondition", 
                                    "size": 2
                                }
                            ]
                        }, 
                        {
                            "name": "mbed_platform", 
                            "children": [
                                {
                                    "name": "critical_section", 
                                    "size": 6
                                }, 
                                {
                                    "name": "SingletonPtr", 
                                    "size": 2
                                }
                            ]
                        }, 
                        {
                            "name": "mbedmicro-mbed", 
                            "children": [
                                {
                                    "name": "attributes", 
                                    "size": 9
                                }, 
                                {
                                    "name": "static_assert", 
                                    "size": 1
                                }
                            ]
                        }, 
                        {
                            "name": "mbedmicro-rtos-mbed", 
                            "children": [
                                {
                                    "name": "basic", 
                                    "size": 1
                                }, 
                                {
                                    "name": "CircularBuffer", 
                                    "size": 16
                                }, 
                                {
                                    "name": "condition_variable", 
                                    "size": 3
                                }, 
                                {
                                    "name": "event_flags", 
                                    "size": 10
                                }, 
                                {
                                    "name": "heap_and_stack", 
                                    "size": 4
                                }, 
                                {
                                    "name": "mail", 
                                    "size": 16
                                }, 
                                {
                                    "name": "malloc", 
                                    "size": 4
                                }, 
                                {
                                    "name": "MemoryPool", 
                                    "size": 18
                                }, 
                                {
                                    "name": "mutex", 
                                    "size": 9
                                }, 
                                {
                                    "name": "queue", 
                                    "size": 13
                                }, 
                                {
                                    "name": "rtostimer", 
                                    "size": 9
                                }, 
                                {
                                    "name": "semaphore", 
                                    "size": 7
                                }, 
                                {
                                    "name": "signals", 
                                    "size": 14
                                }, 
                                {
                                    "name": "threads", 
                                    "size": 34
                                }
                            ]
                        }, 
                        {
                            "name": "mbedtls", 
                            "children": [
                                {
                                    "name": "multi", 
                                    "size": 2
                                }, 
                                {
                                    "name": "selftest", 
                                    "size": 3
                                }
                            ]
                        }, 
                        {
                            "name": "netsocket", 
                            "children": [
                                {
                                    "name": "connectivity", 
                                    "size": 2
                                }, 
                                {
                                    "name": "gethostbyname", 
                                    "size": 4
                                }, 
                                {
                                    "name": "ip_parsing", 
                                    "size": 9
                                }, 
                                {
                                    "name": "socket_sigio", 
                                    "size": 3
                                }, 
                                {
                                    "name": "tcp_echo", 
                                    "size": 1
                                }, 
                                {
                                    "name": "tcp_echo_parallel", 
                                    "size": 1
                                }, 
                                {
                                    "name": "tcp_hello_world", 
                                    "size": 1
                                }, 
                                {
                                    "name": "tcp_packet_pressure", 
                                    "size": 1
                                }, 
                                {
                                    "name": "tcp_packet_pressure_parallel", 
                                    "size": 1
                                }, 
                                {
                                    "name": "udp_dtls_handshake", 
                                    "size": 1
                                }, 
                                {
                                    "name": "udp_echo", 
                                    "size": 1
                                }, 
                                {
                                    "name": "udp_echo_parallel", 
                                    "size": 1
                                }, 
                                {
                                    "name": "udp_packet_pressure", 
                                    "size": 1
                                }, 
                                {
                                    "name": "udp_packet_pressure_parallel", 
                                    "size": 1
                                }
                            ]
                        }, 
                        {
                            "name": "network", 
                            "children": [
                                {
                                    "name": "emac", 
                                    "size": 5
                                }, 
                                {
                                    "name": "wifi", 
                                    "size": 16
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}