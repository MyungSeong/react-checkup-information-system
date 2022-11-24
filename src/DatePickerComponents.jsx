import React, { memo, useEffect, useState, useRef } from 'react';
import { DateRange, DateRangePicker } from 'react-date-range';
import { addYears, subDays } from 'date-fns';
import * as dateFnsLocales from 'date-fns/locale';
import moment from 'moment/moment';
import i18n from 'i18next';
import styled from 'styled-components';

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

import './styles/DatePickerComponents.css';
import { isSameDay, startOfYear } from 'date-fns/esm';

const DatePickerComponents = ({ setDate }) => {
    const ref = useRef(null);

    const [dates, setDates] = useState([]);
    const [visibleCalendar, setVisibleCalendar] = useState(true);
    const [focusedDateRange, setFocusedDateRange] = useState([0, 0]);

    useEffect(() => {
        if (i18n.isInitialized) return;
    }, [i18n.isInitialized]);

    useEffect(() => {
        document.addEventListener('mousedown', clickedOutside);

        return () => {
            document.removeEventListener('mousedown', clickedOutside);
        };
    }, [visibleCalendar]);

    const visibleCalendarHandler = () => {
        if (focusedDateRange[1] === 1) {
            setVisibleCalendar(false);
        }
    };

    const clickedOutside = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
            setVisibleCalendar(false);
        }
    };

    const onSelectDateRanges = ({ selection }) => {
        let { startDate, endDate } = selection;

        startDate = moment(startDate);
        startDate = startDate.isValid() ? startDate.toDate() : undefined;

        endDate = moment(endDate);
        endDate = endDate.isValid() ? endDate.toDate() : undefined;

        setDates([startDate, endDate]);
        setDate({ startDate, endDate });
    };

    return (
        <div className={visibleCalendar ? 'date-range-modal' : ''}>
            {visibleCalendar && (
                <div ref={ref} className='date-range-modal-2'>
                    <DateRange
                        locale={
                            i18n.language.substring(0, 2) in dateFnsLocales
                                ? dateFnsLocales[i18n.language.substring(0, 2)]
                                : dateFnsLocales['enUS']
                        }
                        months={1}
                        onChange={(range) => {
                            onSelectDateRanges(range);
                            visibleCalendarHandler();
                        }}
                        focusedRange={focusedDateRange}
                        onRangeFocusChange={setFocusedDateRange}
                        showMonthAndYearPickers={true}
                        moveRangeOnFirstSelection={false}
                        showDateDisplay={false}
                        ranges={[
                            {
                                startDate: dates[0],
                                endDate: dates[1],
                                key: 'selection',
                            },
                        ]}
                        staticRanges={[
                            {
                                label: '1년 전',
                                range: () => ({
                                    startDate: startOfYear(
                                        addYears(new Date(), -1),
                                    ),
                                    endDate: startOfYear(
                                        addYears(new Date(), -1),
                                    ),
                                }),
                                isSelected(range) {
                                    const definedRange = this.range();

                                    return (
                                        isSameDay(
                                            range.startDate,
                                            definedRange.startDate,
                                        ) &&
                                        isSameDay(
                                            range.endDate,
                                            definedRange.endDate,
                                        )
                                    );
                                },
                            },
                        ]}
                        inputRanges={undefined}
                        maxDate={subDays(new Date(), 0)}
                        scroll={{ enable: true }}
                    />
                </div>
            )}
        </div>
    );
};

export default memo(DatePickerComponents);
